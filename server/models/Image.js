const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    name: String,
    address : String,
    recipe: { type: Schema.Types.ObjectId, ref: 'Recipe' },
  });

module.exports = mongoose.model('Image', ImageSchema);