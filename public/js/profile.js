$(document).ready(function() 
{
	loadComments();
});

function loadComments()
{
    var username = $("#current-user").attr('data-username');
    
    $.ajax({
        url: "/api/comment/" + username,
        method: "GET"
    })
    .then(printAPIResponse);
}

function printAPIResponse(response)
{
    for(var i = 0; i < response.length; i++)
    {
        var item =  $('<div class="col s4">\
                <div class="card blue-grey darken-1">\
                    <div class="card-content white-text">\
                        <p>'+ response[i].comment +'</p>\
                        <span>'+ response[i].username +'</span>\
                    </div>\
                </div>\
            </div>');
        $("#comments-section").append(item);
    }
}