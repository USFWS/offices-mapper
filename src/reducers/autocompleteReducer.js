import * as types from '../actions/types';
import initialState from './initialState';

export default function officeReducer(state = initialState.autocomplete, action) {
  switch (action.type) {
    case types.SELECT_OFFICE:
      return {
        showResults: false
      };
    // case types.UPDATE_QUERY:
    //   return {
    //     showResults: true
    //   };
    case types.SHOW_AUTOCOMPLETE_RESULTS:
      return {
        showResults: true
      };
    case types.HIDE_AUTOCOMPLETE_RESULTS:
      return {
        showResults: false
      };
    default:
      return state;
  }
}
