$(document).ready(function() {
	// get current URL path and assign 'active' class
	var pathname = window.location.pathname;
	$('.nav > li > a[routerLink="'+pathname+'"]').parent().addClass('active');
})