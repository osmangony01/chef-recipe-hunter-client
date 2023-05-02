import React from 'react';
import './Footer.css'
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-title-section'>
                <img src="/images/footer-icon.jpg" alt="" width="60" height="60"/>
                <p className='footer-title'>Liberty's Table</p>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, maxime quidem voluptate provident iste illo nesciunt tempora deleniti similique alias nemo non minima dolore sint quasi illum excepturi sit expedita.</p>
            <div className='footer-icons'>
                <span className="footer-icon"><FaFacebookF></FaFacebookF></span>
                <span className="footer-icon"><FaLinkedinIn></FaLinkedinIn></span>
                <span className="footer-icon"><FaTwitter></FaTwitter></span>
                <span className="footer-icon"><FaGooglePlusG ></FaGooglePlusG></span>
            </div>
            <p>&copy; Copyrights Liberty's Table 2023. All rights reserved</p>
        </div>
    );
};

export default Footer;