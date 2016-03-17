// Playingcard model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PlayingcardSchema = new Schema({
  id: String,
  title: String,
  //url: String,
  text: String,
  game: { type: Schema.Types.ObjectId, ref: 'Game' },
  lat: Number,
  lng: Number,
  //client: {
  //  time: { type: Date }
  //}
});

mongoose.model('Playingcard', PlayingcardSchema);

