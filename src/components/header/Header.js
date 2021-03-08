import React from 'react';
import Navbar from '../navbar/Navbar';
import './header.css';

function Header() {
  return (
    <React.Fragment>
      <section className="header">
        <section className="header-top">
          <section className="header-logo">
            ToDoShka
          </section>
          <section className="header-navbar">
            <Navbar />
          </section>
        </section>
      </section>

    </React.Fragment>
  )
}

export default Header;