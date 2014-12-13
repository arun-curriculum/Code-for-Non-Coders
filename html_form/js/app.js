document.addEventListener("DOMContentLoaded", function() {
	var submitButton = document.querySelector("#submit");

	submitButton.addEventListener("click", function(event) {
		event.preventDefault();

		alert("Thanks for submitting the form!");
	});
});