const { Schema } = require('mongoose');

const ingredientSchema = new Schema({
    name: {
        type: String
    }
});

module.exports = ingredientSchema;