import Navbar from "../components/navbar";
import { AppWrapper } from "../context/state";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Navbar />
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
