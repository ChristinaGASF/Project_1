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
