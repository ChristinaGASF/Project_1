var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantSchema = new mongoose.Schema({
    name: String,
    type: String,
    rating: String,
    image: String,
    id: String,
  });

 var restaurant = mongoose.model('restaurant', restaurantSchema);

module.exports = restaurant;