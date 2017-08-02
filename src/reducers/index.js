import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import offices from './officeReducer';
import query from './queryReducer';
import map from './mapReducer';
import autocomplete from './autocompleteReducer';
import sidebar from './sidebarReducer';

const rootReducer = combineReducers({
  offices,
  map,
  autocomplete,
  query,
  sidebar
});

export default rootReducer;
