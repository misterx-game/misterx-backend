// Playfield model

var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PlayfieldSchema = new Schema({
  geoFeature:GeoJSON.Feature
});

mongoose.model('Playfield', PlayfieldSchema);
