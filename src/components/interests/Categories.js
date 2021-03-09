import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './categories.css';

function Categories(){
  return (
    <React.Fragment>
      <section className="welcomeText">
        Welcome to ToDoShka!
      </section>
      <section className="bodyText">
        Please, choose category of entertainment you are interested in.
      </section>
      <section className="categories">
        Categories:
        <Router>
          <Switch>
            <div className='categoriesLinks'>
              <ul id="categoriesList">
                <li><Link to="/show" href="#">Show</Link></li>
                <li><Link to="/show" href="#">Drink</Link></li>
                <li><Link to="/show" href="#">Extreme</Link></li>
                <li><Link to="/show" href="#">Family Style</Link></li>
              </ul>
            </div>
          </Switch>
        </Router>
      </section>
    </React.Fragment>
  )
}

export default Categories;