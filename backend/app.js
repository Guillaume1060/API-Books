require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const book = require('./models/book');
const path = require ('path');


const stuffRoutes = require ('./routes/stuff');
const userRoutes = require ('./routes/user');

const mongoDB = process.env.DBurl;
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

mongoose.connect(mongoDB,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());
app.use(express.urlencoded({ extended:false}))



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allslow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('',stuffRoutes);
app.use('',userRoutes);

module.exports = app;