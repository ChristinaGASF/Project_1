console.log("Sanity Check: JS is working!");
var $restaurantList;
var allrestaurant = [];
var rootUrl = "http://localhost:3000/"
$(document).ready(function () {

    // Get all 
    $.ajax({
        method: 'GET',
        url: rootUrl + 'restaurant',
        success: handleSuccess,
        error: handleError
    });

    //Success
    function handleSuccess(json) {
        var restaurants = json
        
        restaurants.forEach(restaurant => {
            console.log(restaurant.image);
            // return a string built using a template literal, need to add properties:
            $('#restaurant').append(`
            <div class="row s6">
                <div class="col s12 m3 l2 push-l1">
                    <div class="card">
                        <div class="card-image">
                            <img src=/images/${restaurant.image}>
                            <span class="card-title">${restaurant.name}</span>
                        </div>
                        <article class="card-content">
                            <h6>Type: ${restaurant.type}</h6>
                            <p>Rating: ${restaurant.rating}</p>
                        </article>
                        <div class="card-action">
                            <a href="${restaurant.website}">${restaurant.name}</a>
                        </div>
                    </div>
                </div>
            </div>`
            );
        });
    }

    //Error
    function handleError(e) {
        console.log('error', e);
        $('#restaurantTarget').text('Failed to load.');
    }

});