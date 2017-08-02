import * as types from '../actions/types';

// Search offices
export const search = query => {
  return {
    type: types.UPDATE_QUERY,
    query
  }
}

// Select an individual office
export const selectOffice = office => {
  return {
    type: types.SELECT_OFFICE,
    office
  }
}

// Select nearest offices
export const nearestOffices = nearest => {
  return {
    type: types.NEAREST_OFFICES,
    nearest
  }
}
