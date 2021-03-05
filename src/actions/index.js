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

export const makeApiCall = (category) => {
  return dispatch => {
    dispatch(requestPlaces);
    return (fetch(`https://api.opentripmap.com/0.1/en/places/radius?radius=600&lon=-115.13722&lat=36.17497&kinds=${category}&&format=json&apikey=${process.env.REACT_APP_API_KEY}`)//
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getPlacesSuccess(jsonifiedResponse));
          console.log(jsonifiedResponse);
          return jsonifiedResponse;
        })
      .catch((error) => {
        dispatch(getPlacesFailure(error));
      })
    )

  }
}


//https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=

//   "rate": "2",
//   "wikidata": "Q61906139",
//   "kinds": "cultural,theatres_and_entertainments,nightclubs,interesting_places,adult,music_venues,foods,bars,tourist_facilities",
//   "sources": {
//     "geometry": "wikidata",
//     "attributes": [
//       "wikidata"
//     ]
//   },
//   "otm": "https://opentripmap.com/en/card/Q61906139",
//   "image": "https://commons.wikimedia.org/wiki/File:Las_Vegas_2009_39_-_panoramio.jpg",
//   "preview": {
//     "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Las_Vegas_2009_39_-_panoramio.jpg/400px-Las_Vegas_2009_39_-_panoramio.jpg",
//     "height": 300,
//     "width": 400
//   },
//   "point": {
//     "lon": -115.141235,
//     "lat": 36.169872
//   }
// }