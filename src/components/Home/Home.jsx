import React from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import ChefCart from './ChefCart/ChefCart';

const Home = () => {

    const chefData = useLoaderData();
    console.log(chefData);

    return (
        <div>
            <h2 className='chef-heading'>Your Favourit Chef</h2>
            <div className='chef-list'>
                {
                    chefData.map(chef => <ChefCart key={chef.id} chef={chef}></ChefCart>)
                }
            </div>
        </div>
    );
};

export default Home;