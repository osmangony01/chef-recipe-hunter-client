import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const RecipeCart = ({ recipe }) => {

    const { recipe_name, recipe_img, ingredients, cooking_method, rating } = recipe;

    return (
        <div className='recipe-item'>
            <div className='recipe-img-field'>
                <img src={recipe_img} className='recipe-img' alt="" />
            </div>
            <div className='recipe-info'>
                <p className='recipe-name'>{recipe_name}</p>
                <p><span className='bold'>Ingredients:</span> {ingredients.join(", ")}</p>
                <p><span className='bold'>Cooking method:</span> {cooking_method}</p>
                <p>
                    <Rating
                        placeholderRating={rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar color='orange'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <span className='bold rating'>{rating}</span>
                </p>
            </div>
        </div>
    );
};

export default RecipeCart;