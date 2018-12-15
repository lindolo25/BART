// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");


var Comments = sequelize.define("comments", {
  comment: Sequelize.STRING,
  rating: Sequelize.STRING,
  created_at: Sequelize.DATE
});

// Syncs with DB
Comments.sync();

// exporting to comments sql table
module.exports = Comments;





//Initial routes section
//this will search for a user in the user table
//the route will be dynamic and change to the name of the selected user
//then diplay the profile
//and show all the comments made about that user
$.get("/api/user", function(data) {

    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
        row.addClass("posts");
  
        row.append("<p> anon said:" + data[i].comment + "</p>");
        row.append("<p> anon rated:" + data[i].rating + "</p>");
        row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
  
        $("#comment-section").prepend(row);
  
      }
  
    }
  
  });
  
  // When user posts a comment
  $("#submit-comment").on("click", function(event) {
    event.preventDefault();
  
    // Make a comment object
    var postedComment = {
      comment: $("#comment-section").val().trim(),
      rating: $("#comment-section").val().trim(),
      created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
  
//the submitted comments need to pushed into the table
//for now will console log
    console.log(postedComment);
  
  });
  