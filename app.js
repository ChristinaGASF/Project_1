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

//Success
function handleSuccess (json) {
    var food = json.data
    food.forEach( food => {


//Error
function handleError(e) {
    console.log('error', e);
    $('#foodTarget').text('Failed to load.');
}

});