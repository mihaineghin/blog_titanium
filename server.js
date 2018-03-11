const express = require('express');
const bodyParser = require('body-parser'); 
const multer = require('multer');
const fs = require('fs')
const Post = require('./models/posts')
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 5000;

//Connect to database

mongoose.connect('mongodb://localhost/mydb')

//Middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Creating the post on form submit

app.post('/api/posts', (req, res) => {
  Post.create({
    title: req.body.title,
    description: req.body.description,
    // cartImage: {
    //   data: fs.readFileSync(req.cartImage.path),
    //   contentType: 'image/png'
    // }
  })
  .then(signature => {
    res.json(signature)
  });
  
})  

//Rendering all the posts in database

app.get('/api/posts', (req, res) => {   
  Post.find({}, function(err, data) {
    if (err) throw err;
    res.json(data)
  });
});     

app.listen(port, () => console.log(`Listening on port ${port}`));   