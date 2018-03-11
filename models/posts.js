const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
    title: String,
    description: String,
    cartImg: {data: Buffer, contentType: String}
})

let Post = mongoose.model('Post', postSchema);

module.exports = Post;