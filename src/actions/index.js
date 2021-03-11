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

export const changeCategory = (category) => ({
  type: c.CHANGE_CATEGORY,
  category
})

export const deletePlace = (place) => ({
  type: c.DELETE_PLACE,
  place
})

export const makeApiCall = (category) => {

  return dispatch => {
    if (category) {
      dispatch(requestPlaces);
      return fetch(`https://api.opentripmap.com/0.1/en/places/radius?radius=5000&lon=-115.13722&lat=36.17497&kinds=${category}&&format=json&apikey=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(
          (jsonifiedResponse) => {
            return jsonifiedResponse;
          })
        .then((jsonifiedResponse) => {
          let calls = jsonifiedResponse.map((obj, index) => {
            return fetch(`https://api.allorigins.win/raw?url=https://api.opentripmap.com/0.1/en/places/xid/${obj.xid}?apikey=${process.env.REACT_APP_API_KEY}`)
              .then(response2 => response2.json())
              .then(
                (jsonifiedResponse2) => {
                  jsonifiedResponse[index] = { ...obj, ...jsonifiedResponse2 };//combained
                })
              .catch((error) => {
                dispatch(getPlacesFailure(error));
              })
          })
          Promise.all(calls).then(() => dispatch(getPlacesSuccess(jsonifiedResponse)))
          return jsonifiedResponse;
        })
    } else {
      return false;
    };
  }
}