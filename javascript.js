const sketchArea = document.querySelector(".sketchArea");
const pointer = document.querySelector(".pointer");


// Creates a grid based on the WidthxHeight of the etchasketch board
function createSketchBoard(rows, cols) {
    for (let i = 0; i < rows * cols; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        sketchArea.appendChild(box);
    }

    startPointer(rows, cols);
}



//Buttons
const leftBTN = document.querySelector(".left");
const rightBTN = document.querySelector(".right");
const upBTN = document.querySelector(".up");
const downBTN = document.querySelector(".down");
const clearBTN = document.querySelector(".clear");


// Declares a position
let position; 

//Starts the pointer in the middle of the grid like the actual etch a sketch and moves it with Listeners
function startPointer(rows, cols) {
    const middleCol = Math.floor(cols / 2);
    const middleRow = Math.floor(rows / 2);

    position = (middleRow * cols) + middleCol;
    const boxes = document.querySelectorAll(".box");

    boxes[position].style.backgroundColor = "black";
    boxes[position].style.width = "10px";
    boxes[position].style.height = "6.7px";
    pointer.style.width = "11px";
    pointer.style.height = "7px";
    pointer.style.outline = "1px solid white";
    boxes[position].appendChild(pointer);

    movePointer(rows, cols);
}

// Moves the pointer from the buttons that are being pressed from the user
function movePointer(rows, cols) {
    const boxes = document.querySelectorAll(".box");

    leftBTN.addEventListener("click", () => {
        if (position % cols !== 0) {
            position -= 1;
            boxes[position].style.backgroundColor = "black";
            boxes[position].appendChild(pointer);
        }
    });

    rightBTN.addEventListener("click", () => {
        if ((position + 1) % cols !== 0) {
            position += 1;
            boxes[position].style.backgroundColor = "black";
            boxes[position].appendChild(pointer);
        }
    });

    upBTN.addEventListener("click", () => {
        if (position - cols >= 0) { 
            position -= cols; 
            boxes[position].style.backgroundColor = "black";
            boxes[position].appendChild(pointer);
        }
    });

    downBTN.addEventListener("click", () => {
        if (position + cols < rows * cols) {
            position += cols;
            boxes[position].style.backgroundColor = "black";
            boxes[position].appendChild(pointer);
        }
    })

    clearBTN.addEventListener("click", () => {
        boxes.forEach(box => {
            box.style.backgroundColor= "rgb(182, 182, 182)";
            pointer.style.outline = "none";
        });
        position = (Math.floor(rows / 2) * cols) + Math.floor(cols / 2);
        boxes[position].style.backgroundColor = "black";
        pointer.style.outline = "1px solid white";
        pointer.style.width = "11px";
        pointer.style.height = "7px";
        boxes[position].appendChild(pointer);
    })
    

}

createSketchBoard(60, 60);