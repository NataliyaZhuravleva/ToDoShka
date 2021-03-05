/* eslint-disable import/no-anonymous-default-export */
import * as c from '../actions/ActionTypes';

let initialState = {
  isLoading: false,
  places: [],
  error: null
}


export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_PLACES:
      return Object.assign({}, state, {
        isLoading: true
      });
      case c.GET_PLACES_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          places: action.places
          
      });
      case c.GET_PLACES_FAILURE:
        return Object.assign({}, state, {
          isLoading: false,
          error: action.error
        });
      default:
        return state;
    }
};
  