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
      const id = action.place   
      console.log(id);   
      return {
          ...state,
          places: state.places.filter((place) => state.places.indexOf(place) !== id)
      }
      // return {
      //   ...state,
      //   places: state.places.filter(place => place._id !== place),
        
      // };
    //   return { places: state.places.filter(place =>
    //     place !== action.place
    //  )}
      // return state.filter(place => place !== action.place)
      // return Object.assign({}, state, {
      //   places: action.places.filter(place=>place[place]!==place )

      
    default:
      return state;
  }
};
