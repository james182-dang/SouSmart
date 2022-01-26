const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String!
        password: String!
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
    }


`

module.exports = typeDefs;