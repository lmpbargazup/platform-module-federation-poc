import axios from "axios";
import { useRouter } from "next/router";
import { Fragment, React, useEffect, useState } from "react";
import { constants } from "../../constants/constants";
import { useAppContext } from "../../context/state";
import { MenuContainer, MenuOption, MenuOptionsContainer } from "./menu-styles";

const { API_PLUGINS } = constants;

const Menu = () => {
  const router = useRouter();
  const [plugins, setPlugins] = useState([]);
  const { actions, state } = useAppContext();

  const renderPlugin = (plugin) => {
    actions.setCurrentPlugin(plugin);
    router.push(plugin.path);
  };

  useEffect(() => {
    if (plugins.length === 0) {
      axios
        .get(API_PLUGINS)
        .then(({ data }) => setPlugins(data.reverse()))
        .catch((error) => console.log(error));
    }
  }, []);

  useEffect(() => {
    if (plugins.length > 0) {
      const plugin = plugins.filter(
        (plugin) => plugin.path === window.location.pathname
      )[0];
      actions.setCurrentPlugin(plugin);
    }
  }, [plugins]);

  return (
    <MenuContainer>
      <MenuOptionsContainer>
        {plugins.map((plugin) => (
          <Fragment key={plugin.id}>
            {plugin.isMenuOption && (
              <MenuOption onClick={() => renderPlugin(plugin)}>
                {plugin.name}
              </MenuOption>
            )}
          </Fragment>
        ))}
      </MenuOptionsContainer>
    </MenuContainer>
  );
};

export default Menu;
