var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantSchema = new mongoose.Schema({
    name: String,
    nickname: String,
    imageFlag: String,
  });

 var restaurant = mongoose.model('restaurant', restaurantSchema);

module.exports = restaurant;