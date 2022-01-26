const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String!
        password: String!
        ingredientCount: Int
        savedIngredients: [Ingredient]
    }

    type Ingredient {
        name: String
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

    input AddIngredient {
        newIngredient: String
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addIngredient(newIngredient: AddIngredient!): User
    }


`

module.exports = typeDefs;