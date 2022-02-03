import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import './style.css'

const SignupForm = () => {
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });

    const [validated] = useState(false);

    const [showAlert, setShowAlert] = useState(false);

    const [addUser, { error, data }] = useMutation(ADD_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleSignupSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await addUser({
                variables: { ...userFormData }
            })

            Auth.login(data.addUser.token);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
            username: '',
            email: '',
            password: ''
        });
    };

    return (
        <main>
            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <form className="signupForm" onSubmit={handleSignupSubmit}>
                <h3>Sign Up Here</h3>

                <label for="email">Email</label>
                <input type="email" placeholder="Email" id="email" name="email" value={userFormData.email} onChange={handleInputChange} />

                <label for="username">Username</label>
                <input type="username" placeholder="Username" id="username" name='username' value={userFormData.username} onChange={handleInputChange} />

                <label for="password">Password</label>
                <input type="password" placeholder="Password" id="password" name='password' value={userFormData.password} onChange={handleInputChange} />

                <button className="signupFormButton">Log In</button>
            </form>
        </main>
    );
};

export default SignupForm;