var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodSchema = new mongoose.Schema({
    name: String,
    nickname: String,
    imageFlag: String,
  });

 var food = mongoose.model('food', foodSchema);

module.exports = food;