const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: '',
  password: '',
});

const User = mongoose.model('Users', userSchema);

module.exports = User;
