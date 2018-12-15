// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var comments = require("../models/comments.js");
var social = require("../models/social.js");
var users = require("../models/users.js");
// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", function(req, res) {

    Comments.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });
////
////
/////
////
////
////
/////
////
////
////
/////
////

  // Add a chirp
  app.post("/api/new", function(req, res) {

    console.log("USC Data:");
    console.log(req.body);

    Comments.create({
      comments: req.body.comments,
      ratings: req.body.ratings,
      created_at: req.body.created_at
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });

  });

};