import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './categories.css';
import Places from '../Places'

function Categories() {
  return (
    <React.Fragment>
      <section className="welcomeText">
        Welcome to ToDoShka!
      </section>
      <section className="bodyText">
        Please, choose category of entertainment you are interested in.
      </section>
      <section className="userContainer">
        <section className="categories">
          Categories:
          <Router>
            <Switch>
              <div className='categoriesLinks'>
                <ul id="categoriesList">
                  <li><Link to="/show" href="#">Show</Link></li>
                  <li><Link to="/drink" href="#">Drink</Link></li>
                  <li><Link to="/extreme" href="#">Extreme</Link></li>
                  <li><Link to="/family-style" href="#">Family Style</Link></li>
                </ul>
              </div>
            </Switch>
          </Router>
        </section>
        <section className="userList">
          User List:
          <Places id='places'/>
      </section>
      </section>
    </React.Fragment>
  )
}

export default Categories;