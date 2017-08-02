import * as types from '../actions/types';

export function hideAutocompleteResults() {
  return {
    type: types.HIDE_AUTOCOMPLETE_RESULTS
  }
}
export function showAutocompleteResults() {
  return {
    type: types.SHOW_AUTOCOMPLETE_RESULTS
  }
}
