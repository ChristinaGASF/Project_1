var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  message: String,
  spouse: String,
  parentNames: String,
  childrenNames: String,
  profileImage: String,
  currentCity: String,
  homeTown: String,
  });

 var restaurant = mongoose.model('restaurant', restaurantSchema);

module.exports = restaurant;