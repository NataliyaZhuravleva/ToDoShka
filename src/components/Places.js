import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';

class Places extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall("bars"));
  }

  render() {
    let currentlyVisibleState = null;
    if (selectedCategory != null) {
      currentlyVisibleState =
      
    
    const { error, isLoading, places } = this.props;
      if (error) {
        return <React.Fragment>Error: {error.message}</React.Fragment>;
      } else if (isLoading) {
        return <React.Fragment>Loading...</React.Fragment>;
      } else {
        return (
          <React.Fragment>
            <h1>Places</h1>
            <ul>
              {places.map((place, index) => (
                <div key={index}>
                  <li>
                    <h3> {place.name}</h3>
                    <div>
                      {place.address ?
                        <p>Address: {place.address.house_number} {place.address.road}, {place.address.city}, {place.address.state}, {place.address.postcode}</p>
                        : 'Doesnt have an address'}
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
