import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo.svg';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <nav>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink exact to="contact" activeClassName="active">Contact</NavLink>
                <NavLink exact to="cart" activeClassName="active">Cart</NavLink>
            </nav>
        );
    }
}

export default NavBar; 