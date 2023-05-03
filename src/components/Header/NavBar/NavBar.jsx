import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import ActiveLink from '../../ActiveLink/ActiveLink';
import { AuthContext } from '../../../provider/AuthProvider';

const NavBar = () => {
    const [toggle, setToggle] = useState(true);
    const [dropdown, setDropdown] = useState(true);

    const { user, logOut } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const handleDropdown = () => {
        setDropdown(!dropdown);
    }

    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate("/", { replace: true })
            })
            .catch(error => console.log(error.message))
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
                {user && <div className='toggle-icon'>
                    <div className="dropdown" onClick={handleDropdown}>
                        {user.photoURL ? <img src={user.photoURL} alt="user-img" className='user-img dropdown-img' title={user.displayName}/>
                            : <span className='dropdown-img' title={user.displayName}><FaUserCircle size={32}></FaUserCircle></span>}
                        <div className={dropdown ? "dropdown-child-hide" : "dropdown-child"}>
                            <a href="#">{user.email}</a>
                            <hr className='line line1' />
                            <a href="#"><button className='logout-btn' onClick={handleLogout}>Logout</button></a>
                        </div>
                    </div>
                </div>
                }
            </div>
            <div className={toggle ? "menu-list" : "menu-list menu-list-none"}>
                <ul>
                    <li><ActiveLink className="nav-link" to="/">Home</ActiveLink></li>
                    <li><ActiveLink className="nav-link" to="/blog">Blog</ActiveLink></li>
                    <li><ActiveLink className="nav-link" to="/contact">Contact</ActiveLink></li>
                    {!user && <li><ActiveLink className="nav-link" to="/login">Login</ActiveLink></li>}
                    {user && <li className='user-icon'>
                        <div className="dropdown" onClick={handleDropdown}>
                            {user.photoURL ? <img src={user.photoURL} alt="user-img" className='user-img dropdown-img' title={user.displayName}/>
                                : <span className='dropdown-img' title={user.displayName}><FaUserCircle size={32}></FaUserCircle></span>}
                            <div className={dropdown ? "dropdown-child-hide" : "dropdown-child"}>
                                <a href="#">{user.email}</a>
                                <hr className='line line1' />
                                <a href="#"><button className='logout-btn' onClick={handleLogout}>Logout</button></a>
                            </div>
                        </div>
                    </li>
                    }

                </ul>
            </div>
        </nav>
    );
};

export default NavBar;