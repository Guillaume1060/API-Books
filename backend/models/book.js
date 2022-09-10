const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  imageLink: { type: String, required: false },
  year: { type: Number, required: true },
  country: { type: String, required: false },
  language: { type: String, required: false },
  pages: { type: Number, required: false },
  link: { type: String, required: false },
});

module.exports = mongoose.model('book', bookSchema);