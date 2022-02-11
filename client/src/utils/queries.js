import { gql } from '@apollo/client';

export const GET_ME = gql`
    {
        me {
            _id
            username
            email
            ingredientsCount
            ingredients {
                name
            }
        }
    }
`;

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            ingredients {
                name
            }
        }
    }
`;

export const QUERY_INGREDIENTS = gql`
    query ingredients($username: String!) {
        ingredients(username: $username) {
            name
        }
    }
`;