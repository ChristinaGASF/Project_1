// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var restaurant_list = [

// {
//     name: "input data here - expects String",
//     type: "input data here - expects String",
//     rating: "input data here - expects Number",
//     image: "input data here - expects String",
//     id: "input data here - expects Number",
// },
{
    name: "Boudin Bakery",
    type: "Bakery",
    rating: "3.9",
    image: "boudin.jpeg",
    website: "https://boudinbakery.com/home/"
},
{
    name: "Sunset Reservoir",
    type: "Brewery",
    rating: "4.2",
    image: "sunsetreservoir.png",
    website: "http://www.sunsetbeersf.com/home"
},
{
    name: "The Table",
    type: "New American",
    rating: "4.3",
    image: "thetable.jpg",
    website: "http://www.thetablesj.com/"
},

]

db.Restaurant.deleteMany({}, function(err, restaurants){
    if(err) {
      console.log('Error occurred in remove', err);
    } else {
      console.log('removed all restaurants');
  
    }
  });

// db.Restaurant.create(restaurant_list, (err, newRestaurant) => {
//     if (err) {
//       console.log(err)
//     }
//     console.log(`created ${newRestaurant}`)
//   })

 