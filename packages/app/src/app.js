import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { constants } from "./constants/constants";
import { System } from "./utils/module-federation";

const { API_PLUGINS } = constants;

const App = () => {
  const [plugins, setPlugins] = useState([]);

  useEffect(() => {
    axios.get(API_PLUGINS).then(({ data }) => setPlugins(data));
  }, []);

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
          {plugins.map((plugin) => (
            <Route path={plugin.path} key={plugin.id}>
              <System system={plugin} />
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
