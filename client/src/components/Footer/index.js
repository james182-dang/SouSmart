import React from 'react';

const footerStyle = {

        minHeight: 50,
        paddingTop: 150,
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'fixed',
        bottom: 0,
        
        
}

const Footer = () => {
    return (
        <footer className="w-100 mt-auto bg-secondary p-4" 
        
>
            <div style = { footerStyle } className="container">&copy;2022 by Matt Roland, Alex Sabel, and James Lindsey</div>
        </footer>
    );
};

export default Footer;

