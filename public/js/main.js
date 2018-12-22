$(document).ready(function() 
{
	$('.modal').modal();
	$('#modal1').on('click');
	$('#modal2').on('click');
	$('.modal-trigger').modal();
	//$('select').material_select();
	$('select').formSelect();
	$('#login-form').on('submit', submitLogin);
	$('#signup-form').on('submit', submitSignup);
});


function changeOption() 
{
	$('.all-options').hide();
	$('#' + $('#options').val()).show();
}

function submitLogin(event)
{
	event.preventDefault();

	var credentials = {
		username: $("#username").val().trim(),
		password: $("#password").val().trim()
	};

	if(credentials.username && credentials.password)
	{
		var options = {
			contentType: "application/json",
			method: "POST",
			data: JSON.stringify(credentials)
		};
	
		$.ajax("/login", options).then(function(result) 
		{
			console.log(result);
			if(result)
			{
				window.location = '/profile';
			}        
		});
	}  
}

function submitSignup(event)
{
	event.preventDefault();

	var newProfile = {
		firstName: $("#first_name").val().trim(),
		lastName: $("#last_name").val().trim(),
		age: parseInt($('#age').val().trim()),
		gender: parseInt($('#gender').val()),
		username: $('#s-username').val().trim(), // this will be conflicting with the login username and password
		password: $('#s-password').val().trim(), // rememeber will conflict.
		bio: $('#bio').val().trim()
	};

	var validation = (newProfile.firstName &&
		newProfile.lastName &&
		newProfile.age &&
		newProfile.gender > -1 &&
		newProfile.username &&
		newProfile.password) ? true : false;

	if(validation)
	{
		newProfile.gender = newProfile.gender === 0 ? false : true;

		var options = {
			contentType: "application/json",
			method: "POST",
			data: JSON.stringify(newProfile)
		};
	
		$.ajax("/signup", options).then(function(result) 
		{
			if(!result.error)
			{
				window.location = '/profile';
			}        
		});
	} 
}
