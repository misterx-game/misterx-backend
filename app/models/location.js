// Location model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var LocationSchema = new Schema({
  lat: Number,
  lng: Number,
  group: { type: String, default: 'player'},
});

LocationSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Location', LocationSchema);

