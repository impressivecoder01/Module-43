import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>This is header</h1>
            <nav>
                <ul>
                   <NavLink to='/'>Home</NavLink>
                    <NavLink to='/mobiles'>Mobiles</NavLink>
                    <NavLink to='/laptops'>Laptops</NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;