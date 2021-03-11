import React from 'react';
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import './navbar.css'

function Navbar() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <div className='navbarButtons'>
            <ul id="nav">
              <li><Link to="/" href="#">Home</Link></li>
              <li><Link to="/About" href="#">About</Link></li>
              <li><Link to="/FAQ" href="#">FAQ</Link></li>
              <li><Link to="/Contacts" href="#">Contacts</Link></li>
            </ul>
          </div>
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default Navbar;