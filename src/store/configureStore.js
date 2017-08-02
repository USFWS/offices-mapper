import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import immutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';

export default function configureStore(persistedState) {
  return createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(
      applyMiddleware(immutableStateInvariant())
    )
  );
}
