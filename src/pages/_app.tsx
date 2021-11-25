import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { store } from "../app/store";
import { Store } from 'redux';
import Theme from "src/containers/Theme/Theme";
import configureStore, { IAppState } from "src/app/OldAproach/store";
import { getAllClubs, getTeamDetail } from 'src/app/OldAproach/store/actions/TeamActions';

interface IProps {
  store: Store<IAppState>;
}

function MyApp({ Component, pageProps }: AppProps & IProps) {
  return (
    <Provider store={store}>
      {/* <Provider store={OldStore}> */}
        <Theme>
          <Component {...pageProps} />
        </Theme>
    </Provider>
  );
}

// const OldStore = configureStore();
// OldStore.dispatch(getAllClubs());

export default MyApp;
