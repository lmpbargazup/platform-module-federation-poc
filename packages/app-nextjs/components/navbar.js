import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { constants } from "../constants/constants";
import { useAppContext } from "../context/state";

const { API_PLUGINS } = constants;

const Navbar = () => {
  const router = useRouter();
  const [plugins, setPlugins] = useState([]);
  const { actions } = useAppContext();

  const renderPlugin = (plugin) => {
    actions.setCurrentPlugin(plugin);
    router.push(plugin.path);
  };

  useEffect(() => {
    axios.get(API_PLUGINS).then(({ data }) => setPlugins(data));
  }, []);

  return (
    <div>
      <h1>App NextJS Root</h1>
      <div>
        <nav>
          <ul>
            {plugins.map((plugin) => (
              <li key={plugin.id}>
                <h2
                  style={{ cursor: "pointer" }}
                  onClick={() => renderPlugin(plugin)}
                >
                  <a>Go to: {plugin.path}</a>
                </h2>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
