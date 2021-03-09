import React from 'react';
import Categories from './Categories';


class CategoriesControl extends React.Component {
  render() {
    let currentlyVisibleState = null;
    if (selectedCategory != null) {
      currentlyVisibleState =
        <Categories
          category={selectedCategory}
          onCategorySelection={this.handleSelectedCategory}
        />

    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    )
  }
}
export default CategoriesControl;