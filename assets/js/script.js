$(document).ready(function(){
	
	// Question 4
	// IMPLEMENT "SHOW MODAL" WHEN "CLICK ON LOGIN BUTTON FROM MAIN PAGE" HERE
	$("#nav-toggle").click(function() {
		if( $('#nav-bar' ).is( ':visible' ) ) {
			$("#nav-bar").fadeOut();
		} else {
		$("#nav-bar").fadeIn();
	}
	});
	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON SUBMIT BUTTON FROM MODAL BOX" HERE

	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON CANCEL BUTTON FROM MODAL BOX" HERE
	$("#cancel").click(function() {
		$("#modal-container").hide();
	});
	
	// Question 5
	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON MODAL OVERLAY" HERE
	$("#modal-overlay").click(function() {
		$("#modal-container").hide();
	});
	
});