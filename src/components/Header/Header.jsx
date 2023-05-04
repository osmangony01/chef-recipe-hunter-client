import React from 'react';
import NavBar from './NavBar/NavBar';
import './Header.css';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='header'>
            <div className='inner-content'>
            <NavBar></NavBar>
            <div className='banner-content'>
                <h2>What are your favorite <br />food?</h2>
                <p>Find your next favorite recipe on this user-friendly food recipe website, featuring a diverse selection of dishes, from classic comfort food to international cuisine.</p>
                <div className='search-filed '>
                    <input className='search' type="text" placeholder='Search...'/>
                    <span className='search-icon'><FaSearch color='white'></FaSearch></span>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;