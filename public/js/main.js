
$(document).ready(function() {
$('.modal').modal();
$('#modal1').open('onclick');
$('#modal2').open('onclick');
$('.modal-trigger').modal();
$('select').material_select();
 });

function changeOption() {
	$('.all-options').hide();
	$('#' + $('#options').val()).show();
 }
