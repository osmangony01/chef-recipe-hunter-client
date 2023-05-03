import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './ViewRecipe.css';
import RecipeCart from './RecipeCart';

const ViewRecipe = () => {

    const chefRecipes = useLoaderData();
    console.log(chefRecipes);
    const { chef_name, chef_picture, years_of_experience, number_of_recipes, like, recipe_info } = chefRecipes;

    return (
        <div className='view-recipe'>
            <div className='chef-info'>
                <div className='chef-img-field'><img className='chef-img2' src={chef_picture} alt="" /></div>
                <div className='chef-bio'>
                    <p className='name'>{chef_name}</p>
                    <p>Expericen: <span className='num'>{years_of_experience}</span> years</p>
                    <p>Number of Recipes: <span className='num'>{number_of_recipes}</span></p>
                    <p>Likes: <span className='num'>{like}</span></p>
                </div>
            </div>
            <div>
                <h2 className='recipes-title'>All Recipes of <span className='name-chef'>{chef_name}</span></h2>
                <div className='recipes'>
                    {
                        recipe_info.map(recipe => <RecipeCart key={recipe.recipe_id} recipe={recipe}></RecipeCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ViewRecipe;