var express = require('express'),
  cors = require('cors'),
  passport = require('passport'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  jws = require('jws'),
  config = require('./../../config/config'),
  User = mongoose.model('User'),
  router = express.Router();

module.exports = function (app) {
  app.use('/auth', router);
};

router.options('/github', cors({origin: 'http://localhost:3000', credentials: true}));

router.post('/github', 
  cors({origin: 'http://localhost:3000', credentials: true}),
  function(req, res, next) {
    req.query = req.body;
    passport.authenticate('github', 
      function(err, user, info) {
        res.json({"token": jws.sign({
          header: { alg: 'HS256' },
          payload: user._id,
          secret: config.jwt.secretOrKey
        })});
        next();
      })(req, res, next);
  });
