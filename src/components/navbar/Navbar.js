import React from 'react';
import Header from '../header/Header';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Navbar() {

  return (
    <React.Fragment>
      <section className="navbar">
        <Router>
          <Switch>
            <Link to="/" className="navbar-item">Home</Link>
          </Switch>
        </Router>
      </section>
    </React.Fragment>
  )
}
export default Navbar;