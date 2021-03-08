import React from 'react';
import Navbar from '../navbar/Navbar';
import './header.css';

function Header(){
  return (
    <React.Fragment>
      ToDoShka
      <section className="header-navbar">
      <Navbar />
      </section>
    </React.Fragment>
  )
}

export default Header;