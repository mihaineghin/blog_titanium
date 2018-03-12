const express = require('express');
const bodyParser = require('body-parser'); 
const multer = require('multer');
const path = require('path');
const fs = require('fs')
const Post = require('./models/posts')
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 5000;
//Connect to database
mongoose.connect('mongodb://localhost/mydb')

//Create image storage

const storage = multer.diskStorage({
  destination: './uploads',
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});
 
var upload = multer({ storage: storage })

// create the multer instance that will be used to upload/save the file

//Middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

//Creating the post on form submit

app.post('/api/posts', upload.single('file'), (req, res) => {

  Post.create({
    title: req.body.title,
    moto: req.body.moto,
    description: req.body.description,
    cartImage: req.file.path
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
  

app.post('/api/posts/:id', (req, res) => {
  let data = req.params.id
  res.json(data)
})
 
app.get('/api/posts/:id', (req, res) => {    
  Post.findById(req.params.id, function(err, data) {  
    if (err) throw err; 
    res.json(data)
  });
});  

 
app.listen(port, () => console.log(`Listening on port ${port}`));       