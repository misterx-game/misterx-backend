var express = require('express'),
  router = express.Router(),
  cors = require('cors'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  Location = mongoose.model('Location');

module.exports = function (app) {
  app.use('/location', router);
};

router.get('/', cors(), function (req, res, next) {
  Location.find({}, function(err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.status(500);
      res.json({"message": "failed to get location data"});
    }
  });
});

router.options('/', cors());

router.post('/', cors(), bodyParser.json(), function(req, res, next) {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  var loc = new Location({
    lat: req.body.latitude,
    lng: req.body.longitude
  });
  loc.save(function(err) {
    if (err) {
      console.log(err);
      res.status(500);
    }
    res.status(201);
  });
  res.json(loc);
});
