import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';

export default class SideBar extends React.Component {
  render() {
    return (
        <div className="clothes-list">
            <NavLink exact to="/" activeClassName="active" className="clothes">Mountain clothes</NavLink>
            <NavLink exact to="/" activeClassName="active" className="clothes">Sport clothes</NavLink>
            <NavLink exact to="/" activeClassName="active" className="clothes">Summer clothes</NavLink>
            <NavLink exact to="/" activeClassName="active" className="clothes">Elegance clothes</NavLink>
            <NavLink exact to="/" activeClassName="active" className="clothes">Casual clothes</NavLink>
        </div>
    )
  }
}
