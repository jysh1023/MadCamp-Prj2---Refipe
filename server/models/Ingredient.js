const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    name: String,
    date: String,
    quantity: Number,
    category: String
  });

module.exports = mongoose.model('Ingredient', IngredientSchema);
