// function createGrid() {
//     const container = document.querySelector('.container');
//     container.innerHTML = '';

//     var squarePerSide = prompt("Enter the number of squares per side (maximum 100): ");
//     if (squarePerSide > 100) {
//         squarePerSide = 100;
//     }

//     var squareSize = (960 / squarePerSide) - 2;
//     for (let i = 0; i < squarePerSide; i++){
//         var square = document.createElement('div');
//         square.classList.add('square');
//         square.style.width = squareSize + 'px';
//         square.style.height = squareSize + 'px';
//         square.addEventListener('mouseover', changeColor);
//         container.appendChild(square);
//     }

//     function changeColor() {
//         var square = event.target;
//         var currentColor = square.style.backgroundColor;
//         var currentDarkness = parseInt(square.dataset.darkness) || 0;

//         if (currentColor === " ") {
//             var red = Math.floor(Math.random() * 256);
//             var green = Math.floor(Math.random() * 256);
//             var blue = Math.floor(Math.random() * 256);

//             square.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//         }

//         currentDarkness = + 10;
//         square.style.backgroundColor = 'brightness(' + (100 - currentDarkness) + '%)';
//         square.dataset.darkness = currentColor;

//         if (currentDarkness >= 100) {
//             square.style.backgroundColor = '';
//             square.style.filter = 'brightness(100%)';
//             square.dataset.darkness = 0;
//         }

//     }
    
// }

// createGrid();
let color = 'black';
let click = true;

function populateBord(size) {
    const board = document.querySelector(".board");
    const squares = board.querySelectorAll("div");

    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++){
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }
}

populateBord(16);

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        document.querySelector(".error").style.display = "none";
        populateBord(input);
    } else {
        document.querySelector(".error").style.display = "flex";
    }
}

function colorSquare() {
    if (click) {
        if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
    }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "white"));
}

document.querySelector("body").addEventListener('click', (e) => {
    if (e.target.tagName != "BUTTON") {
        click = !click;
        if (click) {
            document.querySelector(".mode").textContent = "Mode: Coloring";
        } else {
            document.querySelector(".mode").textContent = "Mode: Not Coloring";
        }
    }
    
});