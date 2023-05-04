import React from 'react';
import './Footer.css'
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-title-section'>
                <img src="/images/footer-icon.jpg" alt="" width="60" height="60"/>
                <p className='footer-title'>Flavor Frenzy</p>
            </div>
            <p>Discover delicious recipes from around the world, with user reviews, step-by-step instructions, and helpful tips, on this comprehensive food recipe website.</p>
            <div className='footer-icons'>
                <span className="footer-icon"><FaFacebookF></FaFacebookF></span>
                <span className="footer-icon"><FaLinkedinIn></FaLinkedinIn></span>
                <span className="footer-icon"><FaTwitter></FaTwitter></span>
                <span className="footer-icon"><FaGooglePlusG ></FaGooglePlusG></span>
            </div>
            <p>&copy; Copyrights Flavor Frenzy 2023. All rights reserved</p>
        </div>
    );
};

export default Footer;