/* eslint-disable import/no-anonymous-default-export */
import * as c from '../actions/ActionTypes';

let initialState = {
  isLoading: true,
  places: [],
  error: null,
  category: false,
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
    case c.CHANGE_CATEGORY:
      return Object.assign({}, state, {
        category: action.category
      })
    case c.DELETE_PLACE:
      let newState={...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
};
