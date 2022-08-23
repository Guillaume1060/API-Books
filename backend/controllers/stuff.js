const book = require('../models/book');

exports.createbook = (req, res, next) => {
  const book = new book({
    title: req.body.title,
    author: req.body.author,
    imageLink: req.body.imageLink,
    year: req.body.year,
  });
  book.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

nouve

exports.getOnebook = (req, res, next) => {
  book.findOne({
    _id: req.params.id
  }).then(
    (book) => {
      res.status(200).json(book);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifybook = (req, res, next) => {
  const book = new book({
    _id: req.params.id,
    title: req.body.title,
    author: req.body.author,
    imageLink: req.body.imageLink,
    year: req.body.year,
  });
  book.updateOne({_id: req.params.id}, book).then(
    () => {
      res.status(201).json({
        message: 'book updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deletebook = (req, res, next) => {
  book.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllStuff = (req, res, next) => {
  book.find().then(
    (books) => {
      res.status(200).json(books);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}