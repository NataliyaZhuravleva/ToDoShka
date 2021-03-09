import React from 'react';
import './categories.css';

function Categories(){
  return (
    <React.Fragment>
      <section className="welcomeText">
        Welcome co ToDoShka!
      </section>
      <section className="bodyText">
        Please, choose your interest.
      </section>
      <section className="interestsButtons">
        <button>Show</button>
        <button>Drink</button>
        <button>Extreme</button>
        <button>Family Style</button>
      </section>
    </React.Fragment>
  )
}

export default Categories;