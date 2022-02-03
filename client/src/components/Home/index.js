import React from 'react';

function Home(props) {
    return (
        <main>
            <div className='flex-row justify-space-between'>
                <h1>Welcome to SouSmart!</h1>
            </div>
            <div>
                SouSmart is a recipe search engine using the Spoonacular API. With SouSmart, 
                you can input items and ingredients from your pantry, and search 
                for recipes using those ingredients, showing you meals you can make with 
                what you already have at home!
            </div>
            <div>
                Log in or sign up using the header above to get started!
            </div>
        </main>
    );
}

export default Home;