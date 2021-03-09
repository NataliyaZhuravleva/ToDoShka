import React from 'react';

function Interests(){
  return (
    <React.Fragment>
      <section className="welcome-text">
        Please, choose your interest.
      </section>
      <section classname="buttons">
        <button>Show</button>
        <button>Drink</button>
        <button>Extreme</button>
        <button>Family Style</button>
      </section>
    </React.Fragment>
  )
}

export default Interests;