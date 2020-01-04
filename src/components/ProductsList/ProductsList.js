
import React from 'react';
import  {Link}  from 'react-router-dom';
import './ProductsList.css';

export default class ProductsList extends React.Component {
    render() {
        return (
            <div className="product-container">
                <div className="product">
                    <h5 className="product-title">Title</h5>
                    <p className="product-price">Price: </p>
                    <div className="product-img">
                        <button className="cart">Add to cart</button>
                        <Link exact to="/product"><img src="https:https://s3-eu-central-1.amazonaws.com/zalando-lounge-frontend-blog-seo-live/wp-content/uploads/sites/12/2018/07/M%C4%99ska-elegancja-GANT-w-przyst%C4%99pnej-cenie.jpg" alt="#"/></Link>
                    </div>
                </div>
            </div>
        );
    }
} 