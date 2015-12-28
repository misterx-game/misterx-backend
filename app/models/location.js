// Location model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var LocationSchema = new Schema({
  lat: Number,
  lng: Number,
  group: { type: String, default: 'player'},
  client: {
    time: { type: Date }
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

LocationSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Location', LocationSchema);

