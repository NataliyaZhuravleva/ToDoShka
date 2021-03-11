import Image from './../../img/logo.png';
import Navbar from '../navbar/Navbar';
import React from 'react';
import './header.css';

function Header() {
  return (
    <React.Fragment>
      <section className="header">
        <section className="header-top">
          <div className="header-logo">
            <img id="logo" src={Image} alt="Logo" />
          </div>
          <section className="header-navbar">
            <Navbar />
          </section>
        </section>
      </section>
    </React.Fragment>
  )
}

export default Header;