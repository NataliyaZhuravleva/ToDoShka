import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall} from '../actions';

class Places extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall("bars"));
  }

  render() {
    const { error, isLoading, places } = this.props;
console.log(places);
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Places</h1>
          <ul>
            {console.log(places)}
            {console.log(places[1])}
            {places.map((place, index) => (
              <div>
                {console.log(place)}
                <li key={index}> 
                  <h3> {place.name}</h3>
                  <p>{place.xid}</p>
                  <div>
                    {console.log(place.address)}
                    {place.address ?
                    <p>Address: {place.address.house_number} {place.address.road}, {place.address.city}, {place.address.state}, {place.address.postcode}</p>
                    : 'Loading'}
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    places: state.places,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Places);

// "name": "las vegas",
//     "country": "US",
//     "lat": 36.17497,
//     "lon": -115.13722,
