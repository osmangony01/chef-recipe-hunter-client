import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <h2 className='chef-heading'>Your Favourit Chef</h2>
            <div className='chef-list'>
                <div className='chef-cart'>
                    <img className='chef-img' src="/images/chef1.jpg" alt="" />
                    <p className='chef-name'>Jhon Doe</p>
                    <p>Expericen: <span>9</span> years</p>
                    <p>Number of Recipes: 5</p>
                    <p>Likes: 100</p>
                    <a  href='#'><button className='view-recipes'>View Recipes</button></a>
                </div>
                <div className='chef-cart'>
                    <img className='chef-img' src="/images/chef1.jpg" alt="" />
                </div>
                <div className='chef-cart'>
                    <img className='chef-img' src="/images/chef1.jpg" alt="" />
                </div>
                <div className='chef-cart'>
                    <img className='chef-img' src="/images/chef1.jpg" alt="" />
                </div>
                <div className='chef-cart'>
                    <img className='chef-img' src="/images/chef1.jpg" alt="" />
                </div>
                <div className='chef-cart'>
                    <img className='chef-img' src="/images/chef1.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;