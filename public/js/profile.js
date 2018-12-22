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
        var item =  $("<div>");
        item.addClass("col s12 m6 l4");
        item.append("<span>"+ response[i].username +"</span>");
        item.append("<p>"+ response[i].comment +"</p>");
        $("#comments-section").append(item);
    }
}