import React, { useState } from 'react';
import './Login.css';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../Header/NavBar/NavBar';

const Login = () => {
    const [passShow, setPassShow] = useState(true);

    const handleLogin =()=>[

    ]
    return (
        <div>
        <NavBar></NavBar>
            <div className='login-layout'>
                <div className='login-section'>
                    <h3 className='login-title'>Login your account</h3>
                    <hr className='line' />
                    <form action="" className='form' onSubmit={handleLogin}>
                        <div className='input-group'>
                            <label htmlFor="" className='login-label'>Email</label>
                            <input type="email" name="email" className='input-control' placeholder='Enter your email' required/>
                        </div>
                        <div className='input-group pass-control'>
                            <label htmlFor="" className='login-label'>Password</label>
                            <input type={passShow ? "password" : "text"} name="password" className='input-control' placeholder='Enter your password' required/>
                            <small onClick={() => setPassShow(!passShow)} className='pass-icon'>
                                {passShow ? <span>{<FaEyeSlash></FaEyeSlash>}</span> : <span>{<FaEye></FaEye>}</span>}
                            </small>
                        </div>
                        <button type="submit" className='submit-btn'>Login</button>
                        <p className='register-link'>You don't have an account? go to <Link to="/register" className='register-link-color'>Register</Link></p>
                    </form>
                    <div className='third-party-login'>
                   <p> <button className='google-btn btn-aling'><FaGithub></FaGithub> Continue with Google</button></p>
                   <p><button className='github-btn'><FaGoogle></FaGoogle> Continue with Github</button></p>
                    
                </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;