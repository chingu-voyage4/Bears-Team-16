import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div>
        <nav>
            <div>
                <Link to="/login">Login</Link>
            </div>
            <div>
                <Link to="/signup">Signup</Link>
            </div>
        </nav>
    </div>
);

export default Header;
