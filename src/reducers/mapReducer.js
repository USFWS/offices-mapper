import * as types from '../actions/types';
import initialState from './initialState';

function activateBasemap(basemap, name) {
  if (basemap.name === name) return {...basemap, active: true };
  return {...basemap, active: false};
}

export default function mapReducer(state = initialState.map, action) {
  switch (action.type) {
    case types.ACTIVATE_BASEMAP:
      return {
        ...state,
        basemaps: state.basemaps.map(b => activateBasemap(b, action.name))
      };
    default:
      return state;
  }
}
