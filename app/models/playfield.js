// Playfield model

var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var PlayfieldSchema = new Schema({
  name: String,
  geoFeature: GeoJSON.GeometryCollection
});

mongoose.model('Playfield', PlayfieldSchema);
