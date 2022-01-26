import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            ingredients
        }
    }
`;

export const QUERY_ALL_INGREDIENTS = gql`
    {
        ingredients {
            ingredient
        }
    }
`;