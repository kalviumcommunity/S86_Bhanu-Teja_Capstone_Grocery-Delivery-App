const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String
});
module.exports = mongoose.model('User', UserSchema);
