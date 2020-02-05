import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import clothes from '../../data/data.json';
import { addToCart, passID }from '../../actions/actions';
import './RandomClothes.scss';

class RandomClothes extends React.Component {
    
    handleClick =(id) => {
      this.props.addToCart(id);
    }

    handleId = (id) => {
        this.props.passID(id);
    }

    render() {
        const state = {randomProduct: clothes[Math.floor(Math.random()*clothes.length)]};

        const displayId = state.randomProduct.id;
        const displayTitle = state.randomProduct.title;
        const displayImg = state.randomProduct.img;
        const displayPrice = state.randomProduct.price;

        return (
          <div className="random-clothes-container">
            <div className="random-clothes">
                <h5 className="random-clothes-title">{displayTitle}</h5>
                <p className="random-clothes-price">Price: {displayPrice} €</p>
                <div className="random-clothes-img">
                  <Link exact to="/product" onClick={() => { this.handleId(displayId) }}><img src={displayImg} alt={displayTitle}/></Link>
                  <button className="products-button"  onClick={() => { this.handleClick(displayId) }}>ADD TO CART</button>
                </div>
            </div>
          </div>
      )
    }
  }

const mapDispatchToProps= (dispatch)=>{  
    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
        passID: (id) => {dispatch(passID(id))}
    }
}
export default connect(null,mapDispatchToProps)(RandomClothes);