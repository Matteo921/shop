import React from 'react'
import './Footer.css';
import { NavLink } from 'reactstrap';
class NavBar extends React.Component {

  render() {
    return (
        <div className="footer">
            <div className="footer-copyright">
                <p className="copyright">All rights reserved &copy; by Mateusz Cieślakowski 2020</p>
            </div>
            <div className="footer-links">
                <NavLink href='/'>Home</NavLink>
                <NavLink href='/FAQ'>FAQ</NavLink>
                <NavLink href='/regulamin'>Regulamin</NavLink>
                <NavLink href='/contact'>Contact</NavLink>
            </div>
        </div>
    );
  }
}

export default NavBar;