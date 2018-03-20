const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const Post = require('./models/posts');
const User = require('./models/users');
const mongoose = require('mongoose');
const moment = require('moment');

const app = express();

const port = process.env.PORT || 5000;

// Connect to database
mongoose.connect('mongodb://admin:admin@ds213759.mlab.com:13759/blog');
// Create image storage

const storage = multer.diskStorage({
  destination: './uploads',
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

// create the multer instance that will be used to upload/save the file

const upload = multer({ storage });

// Middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

// Creating the post on form submit

app.post('/api/posts', upload.single('file'), (req, res) => {
  Post.create({
    title: req.body.title,
    moto: req.body.moto,
    author: req.body.author,
    description: req.body.description,
    cartImage: req.file.path,
    time: moment().format('MMM Do YY'),
  })
    .then((signature) => {
      res.json(signature);
    });
});

// Rendering all the posts in database

app.get('/api/posts', (req, res) => {
  Post.find({}, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

app.post('/api/posts/:id', (req, res) => {
  const data = req.body;
  res.json(data);
});

app.get('/api/posts/:id', (req, res) => {
  Post.findById(req.params.id, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

app.patch('/api/posts/:id', upload.single('file'), (req, res) => {
  const { id } = req.params;
  Post.update({ _id: id }, { $set: req.body })
    .exec()
    .then(succes => res.json(succes))
    .catch(err => console.log(err));
});

app.delete('/api/posts/:id', (req, res) => {
  Post.findById(req.params.id)
    .remove()
    .exec()
    .then(succes => res.json(succes))
    .catch(err => console.log(err));
});

// Login & Register handle

app.post('/api/users', (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
  })
    .then((signature) => {
      res.json(signature);
    });
});

app.post('/api/users/check', (req, res) => {
  User.findOne(req.body)
    .then(data => (data !== null ? res.json(data._id) : res.json(undefined)))
    .catch(err => console.log(err));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
