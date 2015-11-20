var passport = require('passport'),
  mongoose = require('mongoose'),
  JwtStrategy = require('passport-jwt').Strategy,
  GitHubStrategy = require('passport-github2').Strategy,
  ObjectId = require('mongoose').Types.ObjectId,
  User = mongoose.model('User');

module.exports = function(app, config) {
  passport.use(new JwtStrategy(config.jwt, function(jwt_payload, done) {
    User.findOne({_id: new ObjectId(jwt_payload.substr(1).slice(0, -1))}, function(err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }));

  for (var confName in config.github) {
    passport.use('github-'+confName, new GitHubStrategy({
        clientID: config.github[confName].clientId,
        clientSecret: config.github[confName].clientSecret
      }, function (accessToken, refreshToken, profile, next) {
        User.findOne({'github.id': profile.id}, function (err, user) {
          if (err) {
            return next(err, false);
          }
          if (user) {
            return user.updateFromGithub(profile, next);
          } else {
            return User.createFromGithub(profile, next);
          }
        });
      }
    ));
  }

  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  app.use(passport.initialize());
};
