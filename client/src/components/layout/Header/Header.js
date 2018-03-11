import React from 'react';
import { Link } from 'react-router-dom';
// import './Header.css'

const Header = () => (
    <div className='header-wrapper'>
        <div className='header-logo'>
            logo comes here
        </div>
        <div className='header-navbar'>
            <div>
                <Link to="/login">Login</Link>
            </div>
            <div>
                <Link to="/signup">Signup</Link>
            </div>
        </div>
    </div>
);

export default Header;
