var express = require('express');
var router = express.Router();

var Game = require('../models/Game.js');

/* GET /game listing. */
router.get('/', function(req, res, next) {
  Game.find(function (err, games) {
    if (err) return next(err);
    res.json(games);
  });
});

/* POST /games */
router.post('/', function(req, res, next) {
  Game.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* GET /games/id */
router.get('/:id', function(req, res, next) {
  Game.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /games/:id */
router.put('/:id', function(req, res, next) {
  Game.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /games/:id */
router.delete('/:id', function(req, res, next) {
  Game.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
