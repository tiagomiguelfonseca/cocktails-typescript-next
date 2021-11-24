import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/* Make the store available to all container 
components in the application without passing it explicitly */
import { Provider } from 'react-redux';
// Store type from Redux
import { Store } from 'redux';
import configureStore, { IAppState } from './store';
import { getAllSports, getSportDetail} from './store/actions/SportActions';
import { getAllClubs, getTeamDetail } from './store/actions/TeamActions';

interface IProps {
  store: Store<IAppState>;
}

const Root = (props:IProps) => {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  );
};

// Generate the store
const store = configureStore();
store.dispatch(getAllClubs());
store.dispatch(getAllSports());
store.dispatch(getTeamDetail());
store.dispatch(getSportDetail("4335"));

ReactDOM.render(
  <React.StrictMode>
    <Root store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
