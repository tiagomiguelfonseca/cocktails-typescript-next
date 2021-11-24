import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { store } from "../app/store";
import Theme from "src/containers/Theme/Theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </Provider>
  );
}

export default MyApp;
