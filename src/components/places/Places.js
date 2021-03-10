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
        <p>When you are planning your trip, you are trying to find Things ToDo internet pages about a particular area. However, 
        all people are different with different interests. One person would like to go to Las Vegas for walking and drinking. 
        Another one would go to Las Vegas Area for a rock climbing in the Red Rocks National Park. Families with kids would love 
        to know about kid’s entertainment, like a roller coaster.</p> 
        <p>ToDoSka is the app creating customized Things ToDo List considering your interests and giving you a 
          list for your personal purposes.</p>
        <p>For now, Todoshka considers trips to Las Vegas, NV only. In the future, we are planning to expand trip locations.</p>  
        <p>Plase, choose a category of your interests.</p>
      </section>

      </React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>The best places for you:</h1>
          <ul>
            {places.map((place, index) => (
              <div key={index} className="places">
                <li>
                  <h4> {place.name}</h4>
                  <div className="info">
                    <div className="description">
                    <div>
                      {place.address ?
                        <p><u>Address:</u> {place.address.house_number} {place.address.road}, {place.address.city}, {place.address.state}, {place.address.postcode}</p>
                        : false}
                    </div>
                    <div>
                      {place.url ?
                        <p><u>Website(s):</u> <a href={place.url}>{place.url}</a> </p>
                        : false
                      }
                    </div>
                    <div>
                      {place.wikipedia_extracts ?
                        <p><u>Description:</u> {place.wikipedia_extracts.text}</p>
                        : false}
                    </div>
                    </div>
                    <div className="objectImage">
                      {place.preview ?
                        <p><img id='objectImage' src={place.preview.source} alt={place.name} /></p>
                        : false}
                      {/* <img src={place.preview.source} alt={place.name}/> */}
                    </div>
                  </div>
                  <div className="info">
                   
                    
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
