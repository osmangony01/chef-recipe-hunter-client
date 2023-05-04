import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../Header/NavBar/NavBar';
import Footer from '../Footer/Footer';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const [passError, setPassError] = useState("");
    const { createUser } = useContext(AuthContext);

    const navigate = useNavigate();
    

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo_url = form.photo_url.value;

        setPassError("");
        if (password.length < 6) {
            setPassError("At least 6 characters needed!!");
            return;
        }
        if(email === "" || password === ""){
            return;
        }
    
        createUser(email, password)
            .then(result => {
                const CreateUser = result.user;
                console.log(CreateUser);
                form.reset();
                updateUserData(result.user, name, photo_url);
                toast("Registration Successful");
                navigate("/", {replace: true});

            })
            .catch(error => {
                console.log(error.message);
            })

        console.log(name, email, password);

    }

    const updateUserData = (user, name, photo_url) => {
        updateProfile(user, { displayName: name, photoURL: photo_url })
            .then(() => {
                console.log('user name updated...');
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div>
            <NavBar></NavBar>
            <div className='login-layout'>
                <div className='login-section'>
                    <h3 className='login-title'>Register your account</h3>
                    <hr className='line' />
                    <form action="" className='form' onSubmit={handleRegister}>
                        <div className='input-group'>
                            <label htmlFor="" className='login-label'>Name</label>
                            <input type="text" name="name" className='input-control' placeholder='Enter your Name' />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="" className='login-label'>Email</label>
                            <input type="email" name="email" className='input-control' placeholder='Enter your email' required />
                        </div>
                        <div className='input-group '>
                            <label htmlFor="" className='login-label'>Password</label>
                            <input type="password" name="password" className='input-control' placeholder='Enter your password' required />
                            <small className='pass-error'>{passError}</small>
                        </div>
                        <div className='input-group'>
                            <label htmlFor="" className='login-label'>PhotoURL</label>
                            <input type="text" name="photo_url" className='input-control' placeholder='Enter Photo URL' />
                        </div>
                        <button type="submit" className='submit-btn'>Register</button>
                        <p className='register-link'>Already have an account? go to <Link to="/login" className='register-link-color'>Register</Link></p>
                    </form>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Register;