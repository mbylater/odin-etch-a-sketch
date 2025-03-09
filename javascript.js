// Select the container
const container = document.querySelector(".container");

// Create variable to controle number of squares and size
let amountPerSide = 16;
let amountTotal = amountPerSide * amountPerSide;
let size = 384 / amountPerSide;

// Initiate first grid
generateGrid();

// Select button and add event to show alert once button is pushed
const button = document.querySelector("#sizeChoice");
button.addEventListener("click", () => {
    amountPerSide = prompt("How many squares do you want to see per side?")

    if (amountPerSide > 0 && amountPerSide <100) {
        amountTotal = amountPerSide * amountPerSide;
        size = 384 / amountPerSide;
    
        clearGrid();

        generateGrid();
    } else {
        alert("The number needs to be larger than 0 and smaller than 100.")
    }
});

// Funtion to clean old grid
function clearGrid() {
    container.innerHTML = '';
}

// Create a loop to generate squares
function generateGrid () {
    for (let i=0; i<(amountTotal); i++) {
        // Create squares and append them to the container
        const square = document.createElement("div");
        container.appendChild(square);
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;

        // Add class to the square div
        square.className = "square";

        // Add event for hover effect
        square.onmouseenter = function(){
            let randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 70%)`;
            square.style.backgroundColor = randomColor;
            const color = window.getComputedStyle(square).backgroundColor;
            console.log(color);
        }        
    }   
}



