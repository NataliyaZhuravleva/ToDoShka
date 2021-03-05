import * as c from './ActionTypes';

export const requestPlaces = () => ({
  type: c.REQUEST_PLACES
});

export const getPlacesSuccess = (places) => ({
  type: c.GET_PLACES_SUCCESS,
  places
});

export const getPlacesFailure = (error) => ({
  type: c.GET_PLACES_FAILURE,
  error
});