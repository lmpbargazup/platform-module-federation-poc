import "zone.js";
import Menu from "../components/menu/menu";
import { AppWrapper } from "../context/state";
import {
  AppComponentContainer,
  AppContainer,
  AppContent,
  NavbarContainer,
  NavbarContent,
  NavbarIconContainer,
} from "./_app-styles";
import "./_app.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <AppContainer>
        <NavbarContainer>
          <NavbarIconContainer />
          <NavbarContent>
            <h1>App NextJS Root</h1>
          </NavbarContent>
        </NavbarContainer>
        <AppContent>
          <Menu />
          <AppComponentContainer>
            <Component {...pageProps} />
          </AppComponentContainer>
        </AppContent>
      </AppContainer>
    </AppWrapper>
  );
}

export default MyApp;
