const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    keyword: String,
    title: String,
    materials: Schema.Types.Mixed,
    url: String
  });

module.exports = mongoose.model('Recipe', RecipeSchema);