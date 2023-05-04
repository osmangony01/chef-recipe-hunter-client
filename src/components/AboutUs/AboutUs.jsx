import React from 'react';
import './AboutUs.css';
import { FaBars, FaLightbulb, FaTimes, FaUserCircle } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <>
            <div className='about'>
                <div className='about-heading'>
                    <h2>About Us</h2>
                </div>
                <div className='about-us'>
                    <div className='about-img-field'>
                        <img src="/images/about.jpg" alt="" className='about-img' />
                    </div>
                    <div className='about-info'>
                        <p className='about-info-title'>Who We Are</p>
                        <h2 className='about-info-heading'>One Thousand flavors <br /> in one place</h2>
                        <p>Our website is dedicated to American cuisine, featuring a wide range of classic dishes and regional favorites. Our extensive collection of recipes and resources is designed to inspire and educate home cooks of all levels.</p>
                        <p>We offer a user-friendly platform with advanced search functionality, filters, and social sharing features, making it easy to find and share your favorite recipes. Our community forum is a great place to connect with other culinary enthusiasts and get expert advice.</p>
                    </div>
                </div>
            </div>

            <div className='about2'>
                <div>
                    <p className='about-info-title'>Our Value</p>
                    <h2 className='about-info-heading'>Take cooking to the <br />next level</h2>
                    <p>Our food recipe website takes cooking to the next level with a vast collection of recipes, resources, and user-friendly features designed to inspire and educate home cooks.</p>
                </div>
                <div>
                    <div className="about2-desc">
                        <div className='about2-desc-icon'><FaLightbulb size={40} color="blue"></FaLightbulb></div>
                        <div>
                            <h2 className='about2-title'>Vision</h2>
                            <p>To become the go-to online destination for food lovers and home cooks, offering innovative and engaging content that inspires and educates, while fostering a vibrant community of culinary enthusiasts.</p>
                        </div>
                    </div>
                    <div className='about2-desc'>
                        <div>
                            <img src="/images/mission.png" className='about2-desc-icon' alt="" />
                        </div>
                        <div>
                            <h2 className='about2-title'>Mision</h2>
                            <p>To inspire and empower home cooks by providing a comprehensive collection of recipes and cooking resources to improve cooking skills and make informed food choices.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;