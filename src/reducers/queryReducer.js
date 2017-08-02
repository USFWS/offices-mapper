import * as types from '../actions/types';
import initialState from './initialState';

export default function queryReducer(state = initialState.query, action) {
  switch (action.type) {
    case types.SELECT_OFFICE:
      return action.office.properties.name;
    case types.UPDATE_QUERY:
      return action.query;
    default:
      return state;
  }
}
