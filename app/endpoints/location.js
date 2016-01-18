var express = require('express'),
  cors = require('cors'),
  passport = require('passport'),
  mongoose = require('mongoose'),
  restify = require('express-restify-mongoose'),
  mustbe = require("mustbe").routeHelpers(),
  router = express.Router(),
  Location = mongoose.model('Location');

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

  restify.serve(router, Location, {
    version: '',
    prefix: '',
    lowercase: true,
    preCreate: [
      mustbe.authorized('report location', okAuth, noAuth),
      function(req, res, next) {
        req.body.user = req.user;
        next();
      }
    ],
    preRead: mustbe.authorized('view all locations', okAuth, noAuth),
    preUpdate: [
      mustbe.authorized('update own location or admin games', okAuth, noAuth)
    ],
    preDelete: mustbe.authorized('admin games', okAuth, noAuth)
  });
};

