const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const port = process.env.PORT || '8000';
const app = express();
// Parsers for POST data!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './public/dist')));
// Change DB name in mongoose.js!
require('./server/config/mongoose.js')
require("./server/config/routes.js")(app);
// Catch all other routes and return index file
app.get('*', (req, res) => {
  res.redirect('/')
});
app.listen(port, () => console.log(`Running on localhost:${port}`));
// DO NOT CHANGE ANYTHING IN THIS FILE! YOUR CODE WILL BREAK!
