import React from 'react';
// import Header from '../header/Header';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './navbar.css'

function Navbar() {

  return (
    <React.Fragment>
      <section className="navbar">
        <Router>
          <Switch>
            <Route>
              <Link to="/" className="navbar-item">Home</Link>
            </Route>
          </Switch>
        </Router>
      </section>
    </React.Fragment>
  )
}
export default Navbar;