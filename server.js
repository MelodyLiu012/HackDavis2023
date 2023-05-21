// used for intializing the https server and sending/receiving https requests
const express = require('express');
// used to interact with https server
const app = express();

// used to set the starting branch for finding stylesheets in views
const path = require('path');

// allows the use of templated html (injecting JS into html)
app.set('view engine', 'ejs');
// set home directory for static files = home directory in server
app.use(express.static(path.join(__dirname)));

// establish the home page of the website
app.get("/", (req, res) => {
  res.render('about');
});

// server is hosted @ localhost:3000
app.listen(3000);
