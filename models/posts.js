const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  title: String,
  moto: String,
  author: String,
  description: String,
  cartImage: String,
});

const Post = mongoose.model('Posts', postSchema);

module.exports = Post;
