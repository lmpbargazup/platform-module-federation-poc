import axios from "axios";
import { useRouter } from "next/router";
import { React, useEffect, useState } from "react";
import { constants } from "../../constants/constants";
import { useAppContext } from "../../context/state";
import { MenuContainer, MenuOption, MenuOptionsContainer } from "./menu-styles";

const { API_PLUGINS } = constants;

const Menu = () => {
  const router = useRouter();
  const [plugins, setPlugins] = useState([]);
  const { actions } = useAppContext();

  const renderPlugin = (plugin) => {
    actions.setCurrentPlugin(plugin);
    router.push(plugin.path);
  };

  useEffect(() => {
    axios
      .get(API_PLUGINS)
      .then(({ data }) => setPlugins(data.reverse()))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (plugins.length > 0) {
      const plugin = plugins.filter(
        (plugin) => plugin.path === router.asPath
      )[0];
      actions.setCurrentPlugin(plugin);
    }
  }, [plugins]);

  return (
    <MenuContainer>
      <MenuOptionsContainer>
        {plugins.reverse().map((plugin) => (
          <MenuOption onClick={() => renderPlugin(plugin)} key={plugin.id}>
            {plugin.scope}
          </MenuOption>
        ))}
      </MenuOptionsContainer>
    </MenuContainer>
  );
};

export default Menu;
