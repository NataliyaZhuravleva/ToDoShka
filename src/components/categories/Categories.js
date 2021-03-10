import React from 'react';
import './categories.css';
import { connect } from 'react-redux';
import { changeCategory } from '../../actions';
import Places from '../places/Places';

function Categories(props) {
  const categories = ['Drink', 'Extreme', 'Family Style', 'Show'];

  const categoriesString = {
    'Drink': "bars",//&biergartens&pubs&restaurants",
    'Extreme': 'climbing',//&roller_coasters&other_amusement_rides',
    'Family Style': 'amusement_parks',//&water_parks&roller_coasters&ferris_wheels&zoos&aquariums&children_museums',
    'Show': 'theatres_and_entertainments'
  }
  const whenCategoryClicked = (category) => {
    let query=categoriesString[category];
    props.dispatch(changeCategory(query));

  }
  return (
    <React.Fragment>
      <section className="welcomeText">
        Welcome to ToDoShka!
      </section>
      {/* <section className="bodyText">
        Please, choose category of entertainment you are interested in.
      </section> */}
      <section className="userContainer">
        <section className="categories">
          Categories:
              <div className='categoriesLinks'>
            <ul id="categoriesList">
              {categories.map((category, index) =>

                <li
                  key={index}
                  onClick={() => whenCategoryClicked(category)}>{category}
                </li>
              )}
            </ul>
          </div>
        </section>
        <section className="userList">
          <Places 
          id='places'
          />
        </section>
      </section>
    </React.Fragment>
  )
}

export default connect()(Categories);