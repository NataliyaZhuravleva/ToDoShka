import React from 'react';
import Navbar from '../navbar/Navbar';
import './header.css';
import image from './../../img/logo.png';
// import headerImg from './../img/header-img.png';
//How to import an image in react js	
// import image from './image-path';

// <img src={image} alt="Write something here" />



function Header() {
  return (
    <React.Fragment>
      <section className="header">
        <section className="header-top">

          <div className="header-logo">
            <img id="logo" src={image} alt="Logo" />
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


//https://www.macaubusiness.com/wp-content/uploads/2020/05/las-vegas.jpg
