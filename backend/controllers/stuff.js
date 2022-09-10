const book = require('../models/book');

exports.createbookForm = (req, res) => {
  res.render('addBook', { })
}

exports.createbook =  async (req, res) => {
  try {
  await book.create({
    title : req.body.title,
    author : req.body.author,
    year : req.body.year,
  })
  res.redirect('/')
} catch (err) {
  res.redirect('/creation')
}}

exports.getOnebook = async (req, res) => {
  try {
  const idBook = req.params.id;
  const bouquin = await book.findById (idBook) 

  console.log (bouquin)
  res.render('book', { bouquin});
  } catch (err) {
    console.log (err)
    res.redirect('/404')
  }}

exports.deletebook = async (req, res) => {
    try {
    const idBook = req.params.id;
    const bouquin = await book.findById (idBook)
    bouquin.deleteOne()
    console.log (idBook)
    res.redirect('/')
    } catch (err) {
      console.log (err)
      res.redirect('/404')
    }}

exports.modifybook = (req, res, next) => {
  const book = new book({
    _id: req.params.id,
    title: req.body.title,
    author: req.body.author,
    imageLink: req.body.imageLink,
    year: req.body.year,
  });
  book.updateOne({_id: req.params.id}, book
  ).then(
    () => {
      res.status(201).json({
        message: 'book updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });});};



exports.getAllBooks = async (req, res) => {
  const livre = await book.find();
  res.render('home', { books : livre });
}

