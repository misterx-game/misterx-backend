// User model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var GameSchema = new Schema({
  id: String,
  name: { type: String, required: 'Name is required', trim: true },
  start: { type: Date, default: Date.now},
  end: { type: Date },
  roles: [
    { name: { type: String, trim: true } }
  ],
  groups: [
    { name: { type: String, trim: true } }
  ],
});

mongoose.model('Game', GameSchema);

