import React from 'react';
import Header from './header/Header';
import Categories from './categories/Categories';
import './App.css';
import Places from './places/Places';


function App() {
  return (
    <React.Fragment>
      <Header />
      <div className='mainContainer'>
        <Categories />
      </div>
      {/* <div className='lineContainer'>
      </div> */}
      <div className='detailContainer'>
        <div className="image">
          <img id='image1' src={"https://www.macaubusiness.com/wp-content/uploads/2020/05/las-vegas.jpg"} alt="An image of Las Vegas, NV" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
