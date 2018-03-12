const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
    title: String,
    moto: String,
    description: String,
    cartImage: String
})

let Post = mongoose.model('Posts', postSchema);

module.exports = Post;