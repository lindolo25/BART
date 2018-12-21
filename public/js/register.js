$("#register-btn").on("click", function(event) {
    event.preventDefault();
  
    // make a username obj
    var newUser = {
      
      username: $("#name").val().trim(),
      password: $("#password").val().trim(),
      first_name: $("#firstname").val().trim(),
      last_name: $("#lastname").val().trim(),
      age: $("#age").val().trim(),
      gender: $("#gender").val().trim(),
      bio: $("#bio").val().trim(),
    };
  
    // AJAX 
    $.post("/api/new", newUser)
      .then(function(data) {
        // console log to keep track in case it doesn't work
        console.log(data);
        alert("Sucess!");
      });
  
  });
  