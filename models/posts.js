const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  moto: String,
  description: String,
  cartImage: String,
});

const Post = mongoose.model('Posts', postSchema);

module.exports = Post;
