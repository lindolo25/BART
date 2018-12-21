$(document).ready(function() {
$('.modal').modal();
$('#modal1').on('click');
$('#modal2').on('click');
$('.modal-trigger').modal();
$('select').material_select();


function changeOption() {
	$('.all-options').hide();
	$('#' + $('#options').val()).show();
 }

  });
