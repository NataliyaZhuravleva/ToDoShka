import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../../actions';
import './places.css'

class Places extends React.Component {
  // constructor(props) {
  //   super(props);
  // };

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      const { dispatch } = this.props;
      dispatch(makeApiCall(this.props.category));
    }
  }

  render() {
    const { error, isLoading, places } = this.props;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>
        <section className="bodyText">
          Please, choose a category you are interested in.
      </section>

      </React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>The best places for you:</h1>
          <ul>
            {places.map((place, index) => (
              <div key={index}>
                <li>
                  <h3> {place.name}</h3>
                  <div>
                    {place.address ?
                      <p>Address: {place.address.house_number} {place.address.road}, {place.address.city}, {place.address.state}, {place.address.postcode}</p>
                      : false}
                  </div>
                  <div>
                    {place.url ?
                      <p>Website(s): <a href={place.url}>{place.url}</a> </p>
                      : false
                    }
      
                  </div>
                  <div className="info">
                    <div className="description">
                      {place.wikipedia_extracts ?
                        <p>Description: {place.wikipedia_extracts.text}</p>
                        : false}
                    </div>
                    <div className="image">
                      {place.preview ?
                        <p><img id='image' src={place.preview.source} alt={place.name} /></p>
                        : false}
                      {/* <img src={place.preview.source} alt={place.name}/> */}
                    </div>
                  </div>
                  <hr />
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
    error: state.error,
    category: state.category,
  }
}

export default connect(mapStateToProps)(Places);

// "name": "las vegas",
//     "country": "US",
//     "lat": 36.17497,
//     "lon": -115.13722,
