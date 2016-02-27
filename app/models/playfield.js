// Playfield model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PlayfieldSchema = new Schema({
  "name": String,
  "geometry": [Schema.Types.Mixed]
});

mongoose.model('Playfield', PlayfieldSchema);
