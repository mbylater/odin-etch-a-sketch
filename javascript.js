// Select the container
const container = document.querySelector(".container");

// Create variable to controle number of squares
let amount = 16 * 16;

// Create a loop
for (let i=0; i<amount; i++) {
    // Create 16x16 square of divs and append them to the container
    const square = document.createElement("div");
    container.appendChild(square);

    // Add class to the square div
    square.className = "square";

    // Add event for hover effect
    square.onmouseenter = function(){
    square.id= "hover";
    }
    square.onmouseleave = function(){
        square.id= "";
        }
}

