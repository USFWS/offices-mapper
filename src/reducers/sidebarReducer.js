import * as types from '../actions/types';
import initialState from './initialState';

export default function sidebarReducer(state = initialState.sidebar, action) {
  switch (action.type) {
    case types.SELECT_OFFICE:
      return 'current-office';
    case types.NEAREST_OFFICES:
      return 'nearest-offices';
    case types.CHANGE_VIEW:
      return action.view;
    default:
      return state;
  }
}
