import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <div>
                <img src="asdff" alt="" />
                <h2>Flavor Frenzy</h2>
            </div>
            <div>
           
                <ul>
                   
                    <li><Link to="/news">Home</Link></li>
                    <li><Link to="/destination">Blog</Link></li>
                    <li><Link to="/blog">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link className='login-btn' to="/login">Login</Link></li>
                    <li className="search-field">
                        <input className='search' type="text" placeholder='search your destination...'/>
                        <span className='search-icon'><img  src="" alt="" /></span>
                    </li>
                    <li><img src="" alt="asdf" /></li>
                </ul>
           
            </div>
        </nav>
    );
};

export default NavBar;