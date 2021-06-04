import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [state, setState] = useState({
    currentPlugin: {
      id: "1",
      path: "/",
      url: "http://localhost:3001/remoteEntry.js",
      scope: "home",
      module: "./plugin",
    },
  });

  const setCurrentPlugin = (plugin) =>
    setState((prevState) => ({ ...prevState, currentPlugin: plugin }));

  const actions = {
    setCurrentPlugin,
  };

  return (
    <AppContext.Provider value={{ state, actions }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
