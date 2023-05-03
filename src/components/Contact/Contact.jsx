import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Contact = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
           <p> this contact page</p>
            <p>{user.displayName}</p>
            <p>
                {user.photoURL ? <img src={user.photoURL} alt="asdf" /> : 'not found'}
            </p>
        </div>
    );
};

export default Contact;