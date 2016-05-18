// third-party
var mongoose = require('mongoose');

// constants
const Schema = mongoose.Schema;

var sampleSchema = new Schema({

});

// takes the connection and options and returns the model
module.exports = function (conn, options) {

  var Sample = conn.model('Sample', sampleSchema);
  
  return Sample;
};