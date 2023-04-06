import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
           
            <h2>this is header</h2>
            <Link to='/'> Home</Link>
            <Link to='/review'> OrderReview</Link>
            <Link to='/about'> About</Link>
            <Link to='/contact'> Contact</Link>
        </nav>
    );
};

export default Header;