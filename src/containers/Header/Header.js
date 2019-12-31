import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

export const Header = props => {
  return (
    <div>
      <nav>
        <div>Navbar</div>
        <NavLink exact to="/" activeClassName="active">
          Root
        </NavLink>
        <NavLink exact to="/home" activeClassName="active">
          Home
        </NavLink>
        <NavLink exact to="/user" activeClassName="active">
          User
        </NavLink>
        <NavLink exact to="/no-found" activeClassName="active">
          no-found
        </NavLink>
        <NavLink exact to="/no-found-2" activeClassName="active">
          no-found-2
        </NavLink>
      </nav>
    </div>
  );
};