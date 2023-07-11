const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
  username: String,
  password: String,
  googleEmail: String
});

module.exports = mongoose.model('User', UserSchema);
