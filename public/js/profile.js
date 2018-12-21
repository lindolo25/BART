$(document).ready(function() {
   
    var social_id = $("#social_id");
    var bio = $(".bio-container");
   
    getProfile();
  

    function handleNewComment (event) {
      event.preventDefault();
      if (!nameInput.val().trim().trim()) {
        return;
      }
      
      newComment({
        comment: something
          .val()
          .trim()
      });
    }
  


    function newComment() {
      $.post("/api/comments", )
        .then(getComments);
    }
  
    
    function showComments () {
      var newTr = $("<tr>");
      newTr.data("comments", comment);
      newTr.append("<td>" + comment.comment + "</td>");
      newTr.append("<td> " + comment.rating + "</td>");
      newTr.append("<td> " + comment.date + "</td>");
      return newTr;
    }
  
   
    function getProfile() {
        //should we be getting comments or profile or?
      $.get("/api/", function(data) {
        var theProfile = [];
        for (var i = 0; i < data.length; i++) {
          theProfile.push(showComments(data[i]));
        }
        showComments(theProfile);
        comment.val("");
      });
    }
  
  
    function renderEmpty() {
      var alertDiv = $("<div>");
      alertDiv.addClass("alert alert-danger");
      alertDiv.text("You must create an account before you can post a comment.");
      commentContainer.append(alertDiv);
    }
  
  });