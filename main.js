let count = 0;
// button function
function buttonClicked() {
	console.log("Button was clicked");

	let newText = "Button was clicked";

	// select 
	let buttonDiv = document.getElementById("button-div")
	count++;
	buttonDiv.innerHTML = "Number of times button clicked: " + String(count);
}