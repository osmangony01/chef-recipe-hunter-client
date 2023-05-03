import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import ActiveLink from '../../ActiveLink/ActiveLink';

const NavBar = () => {
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <nav className="nav">
            <div className='nav-title'>
                <div className='toggle-icon' onClick={handleToggle}>
                    {
                        toggle ? <span className='hide'><FaBars size={24}></FaBars></span>
                            : <span className='hide'><FaTimes size={25}></FaTimes></span>
                    }
                </div>
                <div className='title-nav'>
                    <img src="/images/nav-title-logo.jpg" alt="" width="60px" height="45px"
                    />
                    <h2>Flavor Frenzy</h2>
                </div>
                <div className='toggle-icon'>
                    <img src="" alt="asdf" />
                    <span className='hide'><FaUserCircle size={24}></FaUserCircle></span>
                </div>
            </div>
            <div className={toggle ? "menu-list" : "menu-list menu-list-none"}>
                <ul>
                    <li><ActiveLink className="nav-link" to="/">Home</ActiveLink></li>
                    <li><ActiveLink className="nav-link" to="/destination">Blog</ActiveLink></li>
                    <li><ActiveLink className="nav-link" to="/blog">About</ActiveLink></li>
                    <li><ActiveLink className="nav-link" to="/contact">Contact</ActiveLink></li>
                    <li><ActiveLink className="nav-link" to="/login">Login</ActiveLink></li>
                    <li className='user-icon'>
                        <img src="" alt="asdf" />
                        <span className=''><FaUserCircle size={24}></FaUserCircle></span>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default NavBar;