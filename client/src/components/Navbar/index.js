import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

function AppNavBar(props) {

    return (
        <header className='flex-wrap'>
            <Link to="/">
                <h1>SouSmart</h1>
            </Link>
            <nav className='d-flex flex-wrap'>
                <ul className='d-flex justify-content-between mb-0'>
                    <li>
                        <a href='/recipes' onClick={() => props.setCurrentDisplay('RecipeSearch')}>Search for Recipes</a>
                    </li>
                    {Auth.loggedIn() ? (
                        <>
                            <li>
                                <a href='/ingredients' onClick={() => props.setCurrentDisplay('Ingredients')}>Add to Your Pantry</a>
                            </li>
                            <li>
                                <a href='/' onClick={Auth.logout}>Logout</a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <a href='#login' onClick={() => props.setCurrentDisplay('Login')}>Log In</a>
                            </li>
                            <li>
                                <a href='#signup' onClick={() => props.setCurrentDisplay('Signup')}>Sign Up</a>
                            </li>
                        </>          
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default AppNavBar;