import React from 'react';
import './ChefCart.css';
import { Link } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';

const ChefCart = ({ chef }) => {

    const { id, chef_name, chef_picture, years_of_experience, number_of_recipes, like } = chef;

    return (

        <div className='chef-cart'>
            <img className='chef-img' src={chef_picture} alt="" />
            <p className='chef-name'>{chef_name}</p>
            <p>Expericen: <span>{years_of_experience}</span> years</p>
            <p>Number of Recipes: {number_of_recipes}</p>
            <p><FaThumbsUp color='blue' size={20}></FaThumbsUp> <span className='like'>{like}</span></p>
            <Link to={`/chef/${id}`}><button className='view-recipes'>View Recipes</button></Link>
        </div>

    );
};

export default ChefCart;