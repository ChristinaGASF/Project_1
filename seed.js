// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var restaurant_list = [
{
    name: "input data here - expects String",
    type: "input data here - expects String",
    rating: "input data here - expects Number",
    image: "input data here - expects String",
    id: "input data here - expects Number",
},
]

db.Restaurant.create(Restaurant_list, (err, newRestaurant) => {
    if (err) {
      console.log(err)
    }
    console.log(`created ${newRestaurant.name}`)
  })