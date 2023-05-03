import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import './ErrorRoute.css';

const ErrorRoute = () => {
    const { error, status } = useRouteError()
    return (
        <section className='error-container'>
            <div className='error'>
                <img className='error-icon' src="/images/error-icon.svg" alt="" />
                <h2 className='error-type'>
                    <span>Error</span> {status || 404}
                </h2>
                <p className='error-msg'>
                    {error?.message}
                </p>
                <p>
                    <button className='error-btn'>
                    <Link to='/' className=''>
                        Back to homepage
                    </Link></button>
                </p>
            </div>
        </section>
    );
};

export default ErrorRoute;