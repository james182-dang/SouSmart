import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import './style.css';

const Header = () => {
    

    return (
        <header>
                <Link to="/recipes">
                    <h1>SouSmart</h1>
                </Link>
                <nav>
                    <ul>
                        {Auth.loggedIn() ? (
                            <>
                                <li>
                                    <Link to='/recipes'>Search for Recipes</Link>
                                </li>
                                <li>
                                    <Link to='/ingredients'>Your Pantry</Link>
                                </li>
                                <li>
                                    <a href='/' onClick={Auth.logout}>Logout</a>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/signup">Sign Up</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
        </header>
    );
};

export default Header;