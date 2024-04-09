// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

console.log("Hello!");

const myName = "Zekai";
const myAge = "23";
console.log(myAge);

// Practical JavaScript
// Show and high an element on the page

// Find an element to hide
const toggledParagraph = document.querySelector(".show");
console.log(toggledParagraph);

// Write a function that toggles the show/hide classes

function toggleParagraph() {
	toggledParagraph.classList.toggle("hide");
	toggledParagraph.classList.toggle("show");
	console.log("My toggle function");
	console.log(toggledParagraph);
}

//Find the button and make something happen when we click it
const toggleButton = document.querySelector("#toggle-control");
console.log(toggleButton);

toggleButton.addEventListener("click", toggleParagraph)
