import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsList.css';

export default class ProductsList extends React.Component {
    render() {
        return (
            <div className="products-container">
                <div className="products">
                    <h5 className="products-title">Title</h5>
                    <p className="products-price">Price: </p>
                    <div className="products-img">
                        <button className="cart">Add to cart</button>
                        <Link exact to="/product"><img src="https:https://s3-eu-central-1.amazonaws.com/zalando-lounge-frontend-blog-seo-live/wp-content/uploads/sites/12/2018/07/M%C4%99ska-elegancja-GANT-w-przyst%C4%99pnej-cenie.jpg" alt="#"/></Link>
                    </div>
                </div>
            </div>
        );
    }
} 