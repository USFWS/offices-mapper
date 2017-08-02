import * as types from '../actions/types';

export function activateBasemap(name) {
  return {
    type: types.ACTIVATE_BASEMAP,
    name
  }
}
