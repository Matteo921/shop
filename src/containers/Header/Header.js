import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

export const Header = props => {
  return (
    <div>
      <nav>
        <div>Home</div>
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink exact to="home" activeClassName="active">Home</NavLink>
        <NavLink exact to="user" activeClassName="active">Collection</NavLink>
        <NavLink exact to="user" activeClassName="active">Order</NavLink>
      </nav>
    </div>
  );
};