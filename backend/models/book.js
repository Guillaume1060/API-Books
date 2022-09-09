const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  imageLink: { type: String, required: false },
  year: { type: Number, required: true },
});

module.exports = mongoose.model('book', bookSchema);