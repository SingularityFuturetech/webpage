const express = require('express');
const homePage = require('./html/index');
const service = require('./html/service');
const about = require('./html/about');
const contact = require('./html/contact');
const policy = require('./html/privacyPolicy');
const team = require('./html/team');

const path = require('path');
app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', async (req, res, next) => {
  try {
    res.send(homePage());
  } catch (ex) {
    next(ex);
  }
});

app.get('/service', async (req, res, next) => {
  try {
    res.send(service());
  } catch (ex) {
    next(ex);
  }
});

app.get('/about', async (req, res, next) => {
  try {
    res.send(about());
  } catch (ex) {
    next(ex);
  }
});


app.get('/contact', async (req, res, next) => {
  try {
    res.send(contact());
  } catch (ex) {
    next(ex);
  }
});

app.get('/privacypolicy', async (req, res, next) => {
  try {
    res.send(policy());
  } catch (ex) {
    next(ex);
  }
});

app.get('/team', async (req, res, next) => {
  try {
    res.send(team());
  } catch (ex) {
    next(ex);
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server listening at ${PORT}`);
});
