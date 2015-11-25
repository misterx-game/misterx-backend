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
    res.status(401);
    res.send();
  };

  restify.serve(router, Location, {
    version: '',
    prefix: '',
    lowercase: true,
    preCreate: mustbe.authorized('report location', okAuth, noAuth),
    preRead: mustbe.authorized('view all locations', okAuth, noAuth),
    preUpdate: mustbe.authorized('admin ganes', okAuth, noAuth),
    preDelete: mustbe.authorized('admin games', okAuth, noAuth)
  });
};

