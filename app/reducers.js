/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import homeContainerReducer from 'containers/HomeContainer/reducer';
import musicContainerReducer from 'containers/MusicContanier/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer() {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    homeContainer: homeContainerReducer,
    musicContainer: musicContainerReducer
  });

  return rootReducer;
}
