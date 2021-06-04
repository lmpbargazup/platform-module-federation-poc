import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const homePlugin = {
  url: "http://localhost:3001/remoteEntry.js",
  scope: "home",
  module: "./plugin",
};

const contactPlugin = {
  url: "http://localhost:3002/remoteEntry.js",
  scope: "contact",
  module: "./plugin",
};

function loadComponent(scope, module) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__("default");

    const container = window[scope]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
}

const useDynamicScript = (args) => {
  const [ready, setReady] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    if (!args.url) {
      return;
    }

    const element = document.createElement("script");

    element.src = args.url;
    element.type = "text/javascript";
    element.async = true;

    setReady(false);
    setFailed(false);

    element.onload = () => {
      setReady(true);
    };

    element.onerror = () => {
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      document.head.removeChild(element);
    };
  }, [args.url]);

  return {
    ready,
    failed,
  };
};

function System(props) {
  const { ready, failed } = useDynamicScript({
    url: props.system && props.system.url,
  });

  if (!props.system) {
    return <h2>Not system specified</h2>;
  }

  if (!ready) {
    return <h2>Loading dynamic script: {props.system.url}</h2>;
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {props.system.url}</h2>;
  }

  const Component = React.lazy(
    loadComponent(props.system.scope, props.system.module)
  );

  return (
    <React.Suspense fallback="Loading System">
      <Component />
    </React.Suspense>
  );
}

export default function App() {
  const [plugins, setPlugins] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/plugins")
      .then(({ data }) => setPlugins(data));
  }, []);

  console.log(plugins);

  return (
    <Router>
      <h1>App Root</h1>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          {plugins.map((plugin) => {
            console.log(plugin);
            return (
              <Route path={plugin.path} key={plugin.id}>
                <System system={plugin} />
              </Route>
            );
          })}
        </Switch>
      </div>
    </Router>
  );
}
