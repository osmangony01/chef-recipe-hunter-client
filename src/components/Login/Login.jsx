import React, { useContext, useState } from 'react';
import './Login.css';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../Header/NavBar/NavBar';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const [passShow, setPassShow] = useState(true);
    const [error, setError] = useState("");

    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setError("")
        if(email === "" || password === ""){
            return;
        }

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                form.reset();
                // navigate("/", { replace: true });
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                setError("Incorrect Email or Password!");
            })
        console.log(email, password);

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                // navigate("/", { replace: true });
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError("Incorrect Email or Password!");
                console.log(error.message);
            })
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                // navigate("/", { replace: true });
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError("Incorrect Email or Password!");
                console.log(error.message);
            })
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className='login-layout'>
                <div className='login-section'>
                    <h3 className='login-title'>Login your account</h3>
                    <hr className='line' />
                    <p className='error'>{error}</p>
                    <form action="" className='form' onSubmit={handleLogin}>
                        <div className='input-group'>
                            <label htmlFor="" className='login-label'>Email</label>
                            <input type="email" name="email" className='input-control' placeholder='Enter your email' required />
                        </div>
                        <div className='input-group pass-control'>
                            <label htmlFor="" className='login-label'>Password</label>
                            <input type={passShow ? "password" : "text"} name="password" className='input-control' placeholder='Enter your password' required />
                            <small onClick={() => setPassShow(!passShow)} className='pass-icon'>
                                {passShow ? <span>{<FaEyeSlash></FaEyeSlash>}</span> : <span>{<FaEye></FaEye>}</span>}
                            </small>
                        </div>
                        <button type="submit" className='submit-btn'>Login</button>
                        <p className='register-link'>You don't have an account? go to <Link to="/register" className='register-link-color'>Register</Link></p>
                    </form>
                    <div className='third-party-login'>
                        <p> <button className='google-btn btn-align' onClick={handleGoogleSignIn}><FaGoogle></FaGoogle> <span>Continue with Google</span></button></p>
                        <p><button className='github-btn btn-align' onClick={handleGithubSignIn}><FaGithub></FaGithub><span>Continue with Github</span></button></p>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;