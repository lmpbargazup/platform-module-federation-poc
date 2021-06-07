import React from "react";

const loadComponent = async (scope, module) => {
  try {
    await __webpack_init_sharing__("default");
    const container = await window[scope]; // or get the container somewhere else
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  } catch (e) {
    console.log("error:", e);
  }
};

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

export const System = ({ system }) => {
  const { ready, failed } = useDynamicScript({
    url: system && system.url,
  });

  if (!system) {
    return <h2>Not system specified</h2>;
  }

  if (!ready) {
    return <h2>Loading dynamic script: {system.url}</h2>;
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {system.url}</h2>;
  }

  if (!customElements.get(system.component)) {
    loadComponent(system.scope, system.module);
  }

  const Component = `${system.component}`;

  return (
    <React.Suspense fallback="Loading System">
      <Component />
    </React.Suspense>
  );
};
