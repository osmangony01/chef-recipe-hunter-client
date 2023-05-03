import React from 'react';
import './ChefCart.css';

const ChefCart = ({ chef }) => {

    const { id, chef_name, chef_picture, years_of_experience, number_of_recipes, like } = chef;

    return (

        <div className='chef-cart'>
            <img className='chef-img' src="/images/chef1.jpg" alt="" />
            <p className='chef-name'>{chef_name}</p>
            <p>Expericen: <span>{years_of_experience}</span> years</p>
            <p>Number of Recipes: {number_of_recipes}</p>
            <p>Likes: <span className='like'>{like}</span></p>
            <a href='#'><button className='view-recipes'>View Recipes</button></a>
        </div>

    );
};

export default ChefCart;