import React from 'react';
import './style.css';

function Home(props) {
    return (
        <main>
            <div>
                <div className='splashMessage'>
                    <div>
                        <h1>Welcome to <em>SouSmart</em></h1>
                    </div>
                    <div className='messageContent'>
                        Sousmart is a recipe search engine where you can
                        make an account, add the ingredients you have at home,
                        and select specific ingredients from that list to refine your
                        recipe search to things you can make with what you have.
                    </div>
                    <div className='messageTail'>
                        SouSmart is ready to help you, chef!
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;