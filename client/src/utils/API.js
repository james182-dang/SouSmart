export const getMe = (token) => {
    return fetch('/api/users/me', {
        headers: {
            method: 'GET',
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        }
    });
};

export const createUser = (userData) => {
    return fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    });
};

export const loginUser = (userData) => {
    return fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    });
};

export const saveRecipe = (recipeData, token) => {
    return fetch('/api/users', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(recipeData)
    });
};

export const searchSpoonacular = (query) => {
    return fetch(`https://api.spoonacular.com/food/products/search?query=${query}&apiKey=5556dd24b7fa4625adde439a959c52da`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
};