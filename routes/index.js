var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Index Page' });
});


/* GET scoreboard page. */
router.get('/scoreboard', function(req, res) {
  res.render('scoreboard', { title: 'Scoreboard' });
});


/* GET admin page. */
router.get('/admin', function(req, res) {
  res.render('admin', { title: 'Dashboard' });
});

module.exports = router;
