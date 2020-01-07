import React from 'react';
import './Home.css';
import Products from '../../features/Products/ProductsContainer';

class HomePage extends React.Component {
  
  render () {
    return (
      <div className="home">
        <div className="home-sort col-sm-12 col-md-4 col-lg-3">
          <p className="home-sort-header">Sortuj:</p>
          <ul className="home-sort-list">
            <li>Name: A-Z</li>
            <li>Name: Z-A</li>
            <li>Cena rosnąco</li>
            <li>Cena malejąco</li>
          </ul>
        </div>
        <div className="products">
          <Products />
        </div>
      </div>
    )
  }
};

export default HomePage;