import * as types from '../actions/types';
import * as OfficesAPI from '../api/OfficesAPI';
import initialState from './initialState';

export default function officeReducer(state = initialState.offices, action) {
  switch (action.type) {
    case types.SELECT_OFFICE:
      const name = action.office.properties.name;
      const offices = OfficesAPI.selectOffice(state.features, name);
      return {
        ...state,
        features: OfficesAPI.search(offices, name)
      };
    case types.UPDATE_QUERY:
      return {
        ...state,
        features: OfficesAPI.search(state.features, action.query)
      };
    case types.NEAREST_OFFICES:
      return {
        ...state,
        features: OfficesAPI.selectNearest(state.features, action.nearest)
      };
    default:
      return state;
  }
}
