const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const schemanew = new schema({
  title: String,
  description: String,
  date: String,
  content: String,
  author: String,
  archiveDate: String,
  idNews: String,
  archivedDate: String
});

const NewModel = mongoose.model('news', schemanew);
module.exports = router;


// Add news
router.post('/addnews', (req, res) => {
  const newNews = new NewModel({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    content: req.body.content,
    author: req.body.author,
    idNews: req.body.idNews,
    archivedDate: req.body.archivedDate
  })
  newNews.save(function(err) {
    err ? res.send(err) : res.send('News added successfully');
  })
});

// Get all the news
router.get('/getnews', (req, res) => {
  NewModel.find({}, function(docs, err) {
    err ? res.send(err) : res.send(docs);
  });
});

// Delete news
router.post('/deletenews', (req, res) => {
  NewModel.findOneAndDelete({idNews: req.body.idNews}, (err) => {
    err ? res.send(err) : res.send('News deleted successfully');
  });
});

// Get all the archived news
router.post('/archivednews', (req, res) => {
  const newNews = new NewModel({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    content: req.body.content,
    author: req.body.author,
    idNews: req.body.idNews,
    archivedDate: req.body.archivedDate
  })
  newNews.save(function(err) {
    err ? res.send(err) : res.send('Archived added successfully');
  })
});

// Delete archived list from normal list
router.post('/deletearchivednews', (req, res) => {
  NewModel.findOneAndDelete({idNews: req.body.idNews}, (err) => {
    err ? res.send(err) : res.send('News deleted successfully');
  });
});