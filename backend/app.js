require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const stuffRoutes = require ('./routes/stuff');
const mongoDB = process.env.DBurl;


const app = express();

mongoose.connect(mongoDB,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());
app.use(express.static('public'));

app.get('/fichier/html',(req,res) =>{
    res.sendFile('views/page.html')
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allslow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('',stuffRoutes);




module.exports = app;