import React from 'react';
import queryString from 'query-string';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { loadState, saveState } from './store/localStorage';

import App from './components/App';
import ListView from './components/list/ListView';
import AboutView from './components/about/AboutView';
import MapView from './components/map/MapView';

import './index.css';

const persistedState = loadState();
const queryParameters = queryString.parse(window.location.search);
const store = configureStore(persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

// If there's a search query parameter let's update the state on page load
if (queryParameters.search)
  store.dispatch({type: 'UPDATE_QUERY', query: queryParameters.search});

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={ListView} />
        <Route path="/about" component={AboutView} />
        <Route path="/map" component={MapView} />
      </Route>
    </Router>
  </Provider>, document.getElementById('root'));
