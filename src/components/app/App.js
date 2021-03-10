import React from 'react';
import Header from '../header/Header';
import Categories from '../categories/Categories';
import './App.css';



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
          <img id='image' src={"http://res.cloudinary.com/simpleview/image/upload/v1497480003/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg"} alt="LV" />
          
          <img id='image' src={"https://s31606.pcdn.co/wp-content/uploads/2020/06/iStock-1144242421-e1591402294411-1536x868.jpg"} alt="LV, NV" />
          
          <img id='image' src={"http://res.cloudinary.com/simpleview/image/upload/v1612209833/clients/lasvegas/v21_APPROVED_copy_780ea39f-9d59-4875-b283-8e1a11c6eaf0.jpg"} alt="LV, NV" />
          
          <img id='image' src={"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F02%2F04%2Flas-vegas-nevada-strip-FREEVEGAS0221.jpg"} alt="LV" />
          <img id='image' src={"https://www.macaubusiness.com/wp-content/uploads/2020/05/las-vegas.jpg"} alt="Las Vegas, NV" />

          
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
