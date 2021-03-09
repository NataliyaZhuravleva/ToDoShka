import React from 'react';
import './categories.css';
import Places from '../Places'

function Categories() {
  const categories = ['Drink', 'Extreme', 'Family Style', 'Show'];
  return (
    <React.Fragment>
      <section className="welcomeText">
        Welcome to ToDoShka!
      </section>
      <section className="bodyText">
        Please, choose category of entertainment you are interested in.
      </section>
      <section className="userContainer">
        <section className="categories">
          Categories:
              <div className='categoriesLinks'>
                <ul id="categoriesList">
                  {categories.map((category, index) =>
                      // <li onClick={()=>whenCategoryClicked(index)}>{category}</li>
                      <li>{category}</li>
                  )}
                </ul>
              </div>
        </section>
        <section className="userList">
          User List:
          <Places 
          id='places'
          // whenCategoryClicked={onCategorySelection}/>
          />
        </section>
      </section>
    </React.Fragment>
  )
}

export default Categories;