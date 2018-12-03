console.log("Sanity Check: JS is working!");
var $foodList;
var allfood = [];

$(document).ready(function(){

// Get all 
$.ajax({
    method: 'GET',
    url: '/api/food',
    success: handleSuccess,
    error: handleError
});
function handleSuccess (json) {
    var food = json.data
    food.forEach( food => {

// return a string built using a template literal, need to add properties:
$('#food').append(`<p>${food.name}, the ${food."#property"}.</p>`);
    });
}

//Error
function handleError(e) {
    console.log('error', e);
    $('#foodTarget').text('Failed to load.');
}

});