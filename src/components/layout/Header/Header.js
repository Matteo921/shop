import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";

export const Header = props => {
  return (
    <div>
      <nav>
        <div>Navbar</div>
        <NavLink exact to="/" activeClassName="active">
          Collection
        </NavLink>
        <NavLink exact to="/home" activeClassName="active">
          Home
        </NavLink>
        <NavLink exact to="/Contact" activeClassName="active">
          Cart
        </NavLink>
        <NavLink exact to="/no-found" activeClassName="active">
          no-found
        </NavLink>
        <NavLink exact to="/Contact" activeClassName="active">
          Contact
        </NavLink>
      </nav>
    </div>
  );
};