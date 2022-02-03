import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import './style.css'

const LoginForm = (props) => {
    const [userFormData, setUserFormData] = useState({ username: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    // eslint-disable-next-line
    const [loginUser, { error }] = useMutation(LOGIN_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await loginUser({
                variables: { ...userFormData }
            })

            Auth.login(data.login.token);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
            username: '',
            password: ''
        });
    };

    return (
        // base login form design by foolishdeveloper.com, thank you!

        <main>
            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <form className="loginForm" onSubmit={handleLoginSubmit}>
                <h3>Login Here</h3>
                <label for="username">Username</label>
                <input type="username" placeholder="Username" id="username" name='username' value={userFormData.username} onChange={handleInputChange} />

                <label for="password">Password</label>
                <input type="password" placeholder="Password" id="password" name='password' value={userFormData.password} onChange={handleInputChange} />

                <button className="loginFormButton">Log In</button>
            </form>
        </main>
    );
};

export default LoginForm;

{/* <main className='flex-row justify-center mb-4'>
<div className='col-12 col-md-6'>
    <div className='card'>
        <h4 className='card-header'>Log In</h4>
        <div className='card-body'>
            <form onSubmit={handleFormSubmit}>
                <input
                  className='form-input'
                  placeholder='Username'
                  name='username'
                  type='username'
                  id='username'
                  value={userFormData.username}
                  onChange={handleInputChange}
                />
                <input
                  className='form-input'
                  placeholder='Password'
                  name='password'
                  type='password'
                  id='password'
                  value={userFormData.password}
                  onChange={handleInputChange}
                />
                <button className='btn d-block w-100' type='submit'>
                    Submit
                </button>
            </form>
            {error && <div>Login Failed!</div>}
        </div>
    </div>
</div>
</main> */}