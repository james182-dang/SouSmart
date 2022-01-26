import React from 'react';

const footerStyle = {

        minHeight: 100,
        paddingTop: 100,
        display: 'flex',
        margin: 'auto',
        
}

const Footer = () => {
    return (
        <footer className="w-100 mt-auto bg-secondary p-4" 
        
>
            <div className="container">&copy;2022 by Matt Roland, Alex Sabel, and James Lindsey</div>
        </footer>
    );
};

export default Footer;

