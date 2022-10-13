import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <>
      <div className="navbar">
        <ul>
            <li><Link className="nav-link" to="/">Login</Link> </li>
        </ul>
      </div>
      </>
    );
};


export default Navbar;