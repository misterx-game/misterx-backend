// User model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: String,
  github: {
    id: Number,
    username: String,
    $ref: String
  }
});

UserSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });


UserSchema.statics.createFromGithub = function (profile, next) {
  var newUser = new this({
    github: {
      id: profile.id,
      username: profile.username,
      $ref: profile.profileUrl
    }
  });
  newUser.save(function(err, doc) {
    return next(false, doc);
  });
};

UserSchema.methods.updateFromGithub = function (profile, next) {
  var user = this;
  user.github.username = profile.username;
  user.github.$ref = profile.profileUrl;
  user.save(function(err, doc) {
    return next(false, user);
  });
};

mongoose.model('User', UserSchema);

