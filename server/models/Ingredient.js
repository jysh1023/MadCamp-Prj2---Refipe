const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    date: String,
    quantity: Number,
    // memo: String,
    // refrigerator: { type: Schema.Types.ObjectId, ref: 'Refrigerator' },
    category: String
  });

module.exports = mongoose.model('Ingredient', IngredientSchema);
