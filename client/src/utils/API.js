export const getMe = (token) => {
    return fetch('/api/users/me', {
        headers: {
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

export const searchSpoonacular = (query) => {
    return fetch(`https://api.spoonacular.com/food/products/search?query=${query}&apiKey=5556dd24b7fa4625adde439a959c52da`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
};