import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from './logo.png'

const NavBar = () => {
    return (
        <nav className="navbar">
            <img className='Logo' src={logo} alt="lg"></img>
            <ul className="nav-links">
                <li>
                    <NavLink to="/" end activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
