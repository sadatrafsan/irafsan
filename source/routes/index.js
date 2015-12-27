var express = require('express');
var router = express.Router();
var appdata = require('../data.json');


/*GET home page. */
router.get('/', function(req, res, next) {

  var expertise = [];
  expertise = appdata.expertise;

  res.render('index', {
    title: 'Home',
    page: 'home',
    expertise: expertise
  });
});


/* GET portfolio page. */
router.get('/portfolio', function(req, res, next) {

  var portfolio = [];
  portfolio = appdata.skills;

  res.render('portfolio', {
    title: 'Portfolio',
    page: 'portfolio',
    portfolio: portfolio

  });
});


/* GET specific portfolio page. */
router.get('/portfolio/:id', function(req, res, next) {

  var portfolio = [];

  appdata.skills.forEach(function(item){
    if(item.tag == req.params.id){
      portfolio.push(item);
    }
  });

  res.render('portfolio', {
    title: 'Projects',
    page: 'description',
    portfolio: portfolio
  });
});


/* GET contact page. */
router.get('/contact', function(req, res, next) {

  res.render('contact', {
    title: 'Contact',
    page: 'contact'
  });
});

module.exports = router;
