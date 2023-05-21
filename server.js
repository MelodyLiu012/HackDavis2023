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
  res.status(200);
  res.render('about');
});

app.get("/test", (req, res) => {
  res.status(200);
  res.render('test');
});

app.get("/references", (req, res) => {
  res.status(200);
  res.render('references');
});

app.get("/result", (req, res) => {
  res.status(200);
  res.render('result');
});

app.get("/:invalid_link", (req, res) => {
  res.status(404);
  res.send(`Error: "${req.params.invalid_link}" is not a valid link extension`)
});

// server is hosted @ localhost:3000
app.listen(3000);
