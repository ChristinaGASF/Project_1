console.log("Sanity Check: JS is working!");
var $restaurantList;
var allrestaurant = [];
var rootUrl = "http://localhost:3000/"
$(document).ready(function () {

// -----------------------------------------------------------GET ALL 
    $.ajax({
        method: 'GET',
        url: rootUrl + 'restaurant',
        success: handleSuccess,
        error: handleError
    });

    // SUCCESS
    function handleSuccess(json) {
        var restaurants = json

        restaurants.forEach(restaurant => {
            $('#restaurant').append(`
                <div class="col s12 m4 l3 pull-m1 pull-l1 left">
                    <div class="card">
                        <div class="card-image">
                            <img src=${restaurant.image} class="responsive-image">
                            <span class="card-title" style="height:78px; width: 100%;"><h6>${restaurant.name}</h6></span>
                        </div>
                        <article class="card-content">
                            <section class="card-head">
                                <h6>${restaurant.type}</h6>
                            </section>
                                <div class="star-container">
                                    <span class="${restaurant._id} fa fa-star unchecked"></span>
                                    <span class="${restaurant._id} fa fa-star unchecked"></span>
                                    <span class="${restaurant._id} fa fa-star unchecked"></span>
                                    <span class="${restaurant._id} fa fa-star unchecked"></span>
                                    <span class="${restaurant._id} fa fa-star unchecked"></span>
                                </div>
                        </article>
                        <div class="card-action" style="height:6em;">
                        <a href="${restaurant.website}"><i id="${restaurant._id}" class="material-icons right delete-icon">close</i>${restaurant.name}</a><br>                        
                        </div>
                    </div>
                </div>`);
                let stars = $(`.${restaurant._id}`)
                let count = 0
                stars.each( function(star){
                    
                    if (count >= restaurant.rating)
                        return false;

                    $(this).removeClass('unchecked').addClass('checked')
                    count++
                });
        });
    }

    // ERROR
    function handleError(e) {
        console.log('error', e);
        $('#restaurantTarget').text('Failed to load.');
    }


// -------------------------------------------- CREATE NEW RECOMMENDATION 
    // ON CLICK
    $('form').on('submit', function (e) {
        e.preventDefault();

        let recommend = {
            name: $('#restaurant-name').val(),
            type: $('#type').val(),
            rating: $('#rating').val(),
            image: $('#image').val(),
            website: $('#website').val()
        };

        if (recommend.rating > 5 || recommend.rating < 1) {
            alert("Please rate on scale of 1-5");
            return;
        }

    
        $.ajax({
            method: 'POST',
            url: rootUrl + 'restaurant',
            data: recommend,
            success: handleSuccess,
            error: handleError
        });

        // SUCCESS
        function handleSuccess(json) {
            var restaurant = json

            console.log(restaurant.image);
            $('#restaurant').append(`
            <div class="col s12 m4 l3 pull-m1 pull-l1 left">
                    <div class="card">
                        <div class="card-image">
                            <img src=${restaurant.image} class="responsive-image">
                            <span class="card-title" style="height:78px; width: 100%;"><h6>${restaurant.name}</h6></span>
                        </div>
                        <article class="card-content">
                            <section class="card-head">
                                <h6>${restaurant.type}</h6>
                            </section>
                                <div class="star-container">
                                    <span class="${restaurant._id} fa fa-star unchecked"></span>
                                    <span class="${restaurant._id} fa fa-star unchecked"></span>
                                    <span class="${restaurant._id} fa fa-star unchecked"></span>
                                    <span class="${restaurant._id} fa fa-star unchecked"></span>
                                    <span class="${restaurant._id} fa fa-star unchecked"></span>
                                </div>            
                        </article>
                        <div class="card-action" style="height:6em;">
                        <a href="${restaurant.website}"><i id="${restaurant._id}" class="material-icons right delete-icon">close</i>${restaurant.name}</a><br>                        
                        </div>
                    </div>
                </div>`);
                let stars = $(`.${restaurant._id}`)
                let count = 0
                stars.each( function(star){
                    
                    if (count >= restaurant.rating)
                        return false;

                    $(this).removeClass('unchecked').addClass('checked')
                    count++
                });
        }

        // ERROR
        function handleError(e) {
            console.log('error', e);
            $('#restaurantTarget').text('Failed to load.');
        }
    })

    

    // -------------------------------------------------------UPDATE
    $('#restaurant').on('click','.update', function (){
        console.log($(this));
        var id = $(this).rating ("id");
    
    $('restaurant.rating').append(`
            <div class="col s12 m3 l2 push-m1 push-l1 left">
                <div class="card">
                    <div class="card-image">
                        <img src=${restaurant.image} class="responsive-image">
                            <span class="card-title" style="height:78px; width: 100%;"><h6>${restaurant.name}</h6></span>
                    </div>
                    <article class="card-content">
                            <h6>${restaurant.type}</h6>
                            <p class="rating">Rating: ${restaurant.rating} <i id="update" class="hidden material-icons right">create</i></p>
                    </article>
                    <div class="card-action" style="height:6em;">
                        <a href="${restaurant.website}"><i id="${restaurant._id}" class="material-icons right delete-icon">close</i>${restaurant.name}</a><br>                        
                    </div>
                </div>
            </div>`);

    var newRating = {
        rating: $('#ratingUpdate').val()
    }
    console.log(updatedRating);

    $.ajax({
        method:'PUT',
        url: `${rootUrl}restaurant/${id}`,
        success: updatedRating,
        error: handleError,
    })

    function updatedRatingSuccess (json) {
        var restaurant = json;
        console.log (restaurant);
        window.location.reload();
    };
        // ERROR
        function handleError(e) {
            console.log('error', e);
            $('#restaurantTarget').text('Failed to load.');
        }
    })

    //------------------------------------------------------- DELETE


    $('#restaurant').on('click', '.delete-icon', function () {

        var id = $(this).attr('id');
        console.log(id);
        $.ajax({
            method: 'DELETE',
            url: `${rootUrl}restaurant/${id}`,
            success: deleteSuccess,
            error: handleError
        });
    });

    function deleteSuccess(json) {
        window.location.reload();
        console.log(json);
    };

});