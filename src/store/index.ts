/*  Imports from Redux:
 applyMiddleware: Applies middleware to the dispatch method of the Redux store
 combineReducers: Merges reducers into one
 createStore: Creates a Redux store that holds the state tree
 Store: The TS Type used for the store, or state tree
 */
import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
/*  Thunk
Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.
*/
import thunk from 'redux-thunk';
import { ISportState, sportReducer } from './reducers/SportReducers';
import { teamReducer, ITeamState } from './reducers/TeamReducers';

// Create an interface for the application state
export interface IAppState {
  teamsState: ITeamState;
  sportsState: ISportState;
}

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
  teamsState:  teamReducer,
  sportsState: sportReducer,
});


// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(thunk)));
  return store;
}