const { Schema } = require('mongoose');

const ingredientsSchema = new Schema({
    name: {
        type: String
    }
});

module.exports = ingredientsSchema;