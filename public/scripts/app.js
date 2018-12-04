console.log("Sanity Check: JS is working!");
var $restaurantList;
var allrestaurant = [];
var rootUrl = "http://localhost:3000/"
$(document).ready(function(){

// Get all 
$.ajax({
    method: 'GET',
    url: rootUrl+'restaurant',
    success: handleSuccess,
    error: handleError
});

//Success
function handleSuccess (json) {
    var restaurants = json
    
    restaurants.forEach( restaurant => {
        console.log(restaurant)
// return a string built using a template literal, need to add properties:
$('#restaurant').append(`<p>${restaurant.name}, the ${restaurant.rating}.</p>`);
    });
}

//Error
function handleError(e) {
    console.log('error', e);
    $('#restaurantTarget').text('Failed to load.');
}

});