import React, { useState } from 'react';
import { FaHeart, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCart = ({ recipe }) => {
    const [disable, setDisable] = useState(false);

    const { recipe_name, recipe_img, ingredients, cooking_method, rating } = recipe;

    const handleDisable = () => {
        setDisable(true);
        console.log('toast');
        toast("Added Your Favorite Recipe");
    }


    return (
        <div className='recipe-item'>
            <div className='recipe-img-field'>
               
                    <img src={recipe_img} className='recipe-img' alt="" loading="lazy"/>
                

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
                <p>
                    <button className={!disable ? "aliging-item favorite-btn" : "aliging-item favorite-btn disable-favorite-btn"} onClick={handleDisable}>
                        <span>Favorite</span>
                        <FaHeart className='fav-icon'></FaHeart>
                    </button>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default RecipeCart;