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

<<<<<<< HEAD
<<<<<<< HEAD
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            user {
                _id
                username
                email
            }
=======

export const ADD_USER = gql`
    mutation addUser($username: String!, $password: String!, $email: String!) {
        addUser(username: $username, password: $password, email: $email) {
            _id
            username
            email
>>>>>>> fc99a649b3ab3a58014ff9eafda13901b49d9eaa
=======
export const ADD_USER = gql`
    mutation addUser($username: String!, $password: String!, $email: String!) {
        addUser(username: $username, password: $password, email: $email) {
            token
            user {
              _id
              username
              email
            }  
>>>>>>> ad03c0779fd1fdd46ba15e7c6d094251b7dbaae4
        }
    }
`;