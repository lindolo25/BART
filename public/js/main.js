$(document).ready(function() 
{
	$('.modal').modal();
	$('#modal1').on('click');
	$('#modal2').on('click');
	$('.modal-trigger').modal();
	//$('select').material_select();
	$('select').formSelect();
	$('#login-form').on('submit', submitLogin);
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
				console.log(result);
			}        
		});
	}
    
}