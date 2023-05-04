import React from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import ChefCart from './ChefCart/ChefCart';

const Home = () => {

    const chefData = useLoaderData();
    console.log(chefData);

    return (
        <div>
            <h2 className='chef-heading'>Your Favorite Chef</h2>
            <div className='chef-list'>
                {
                    chefData.map(chef => <ChefCart key={chef.id} chef={chef}></ChefCart>)
                }
            </div>

            <div className='join-us'>
                <div className='join-us-content'>
                    <p className='join-title'>JOIN US</p>
                    <p className='join-info'>Let's start sharing <br /> your awesome <br /> recipes</p>
                    <button className='join-btn'>Join Us</button>
                </div>
                <div className='join-field'>
                    <img src="/images/bg2.jpg"  alt="" className='join-field-img'/>
                </div>
            </div>

            <div className='contact'>
                <h2 className='contact-title'>Contact Us</h2>
                <div className='send-us'>

                    <div>
                        <h2 className='send-title'>Send Us A Message</h2>
                        <div className='name-field'>
                            <input type="text" placeholder='First Name' className='name-field-control' />
                            <input type="text" placeholder='Last Name' className='name-field-control' />
                        </div>
                        <div>
                            <input type="text" placeholder='Email' className='name-field-control' />
                        </div>
                        <div>
                            <textarea name="" id="" rows="8" placeholder='Message' className='name-field-control'></textarea>
                        </div>
                        <div>
                            <button className='send-btn'>Send</button>
                        </div>
                    </div>
                    <div className='message-img'>
                        <img src="/images/recipe.jpg" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;