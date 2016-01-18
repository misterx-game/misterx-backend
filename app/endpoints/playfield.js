var express = require('express'),
  cors = require('cors'),
  passport = require('passport'),
  mongoose = require('mongoose'),
  restify = require('express-restify-mongoose'),
  mustbe = require("mustbe").routeHelpers(),
  router = express.Router(),
  Playfield = mongoose.model('Playfield');

module.exports = function (app) {
  app.use(cors());
  app.use(passport.authenticate('jwt', { session: false }));
  app.use('/', router);

  okAuth = function(req, res, next) {
    next();
  };
  noAuth = function(req, res, next) {
    res.send(401, 'Authorization failed');
  };

  restify.serve(router, Playfield, {
    version: '',
    prefix: '',
    lowercase: true,
    preCreate: [
      mustbe.authorized('admin games', okAuth, noAuth),
      function(req, res, next) {
        req.body.user = req.user;
        next();
      }
    ],
    preRead: mustbe.authorized('report location', okAuth, noAuth),
    preUpdate: [
      mustbe.authorized('admin games', okAuth, noAuth)
    ],
    preDelete: mustbe.authorized('admin games', okAuth, noAuth)
  });
};

