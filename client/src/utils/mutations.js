import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_INGREDIENT = gql`
    mutation addIngredient($newIngredient: AddIngredient!) {
        addIngredient(newIngredient: $newIngredient) {
            _id
            username
            savedIngredients {
                name
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            user {
                _id
                username
                email
            }
        }
    }
        `;
