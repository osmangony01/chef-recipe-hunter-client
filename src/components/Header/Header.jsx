import React from 'react';
import NavBar from './NavBar/NavBar';
import './Header.css';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='header'>
            <NavBar></NavBar>
            <div className='banner-content'>
                <h2>What are your favorite <br />food?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ullam, nostrum labore assumenda pariatur delectus praesentium quo quidem itaque dolorem harum modi? Animi laboriosam debitis dolorem impedit accusamus sequi quidem.</p>
                <div className='search-filed '>
                    <input className='search' type="text" placeholder='Search...'/>
                    <span className='search-icon'><FaSearch color='white'></FaSearch></span>
                </div>
            </div>
        </div>
    );
};

export default Header;