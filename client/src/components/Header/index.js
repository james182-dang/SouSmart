import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import Background from '../../primarylogo.png'


var headerStyle = {

        minHeight: 100,
        paddingTop: 100,
        alignContent: 'center',
        backgroundImage: "url(" + { Background } + ")"
        
    }



const Header = () => {
    

    return (
        
        <header className="bg-secondary mb-4 py-2 flex-row align-center">
            <div className="container flex-row justify-space-between-lg justify-center align-center">

                
                
                <Link to="/">
                    <h1>SouSmart</h1>
                </Link>

                <nav className="text-center">
                    {Auth.loggedIn() ? (
                        <>
                            <a href="/" onClick={Auth.logout}>
                                Logout
                            </a>
                        </>
                    ) : (
                        <>
                          <Link to="/login">Login</Link>
                          <Link to="/signup">Signup</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;