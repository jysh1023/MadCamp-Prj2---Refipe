const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  email: String,
  username: String,
  password: String,
  googleEmail: String,
  refrigerator: { type: Schema.Types.ObjectId, ref: 'Refrigerator' }
});

module.exports = mongoose.model('User', UserSchema);
