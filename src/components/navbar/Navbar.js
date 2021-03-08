import React from 'react';
// import Header from '../header/Header';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './navbar.css'

function Navbar() {

  return (   
    <React.Fragment>
      {/* <div className="navbar"> */}
         <Router>
          <Switch>
           <div className='navbarButtons'>
              <ul id="nav">
                <li><Link to="/" href="#">Home</Link></li>
                <li><Link to="/About"href="#">About</Link></li>
                <li><Link to="/FAQ" href="#">FAQ</Link></li>
                <li><Link to="/Contact"href="#">Contact</Link></li>
              </ul>
            </div>

            {/* <Route>
              <Link to="/" className="navbar-item">Home</Link>
            </Route> */}
        
          </Switch>
        </Router> 
      {/* </div> */}
    </React.Fragment>
  )
}
export default Navbar;