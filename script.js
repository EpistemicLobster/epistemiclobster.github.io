const screen = document.querySelector("#screen");
const resetButton = document.querySelector('#one');
const colorButton = document.querySelector('#two');
const sizeButton = document.querySelector('#three');
const homeButton = document.querySelector('#home');
let gridInput = 16;
let colorState = 0;
let gridArray = 0;
let target;
let cell;


//add images to button


//generate a grid via append cells to screen

function generateGrid(gridInput) {
        for (let i = 0; i < gridInput * gridInput; i++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            screen.appendChild(cell);
        };
        screen.style.setProperty('--grid-rows', gridInput)
        screen.style.setProperty('--grid-cols', gridInput)
        arrayListeners();
    };

function arrayListeners () {
    gridArray = Array.from(document.querySelectorAll('.cell'))
    gridArray.forEach(listeners => {
        listeners.addEventListener('mouseover', changeColor)
    })
}


function changeColor() {
    if(colorState == 0) { 
        this.style.backgroundColor = 'black'
    } else if (colorState == 1) {
    let randomValue = Math.floor(Math.random() * 16777215).toString(16);
    this.style.backgroundColor = `#` + randomValue;
    } else if (colorState == 2) {
    this.style.backgroundColor = 'rgb(206, 206, 214)';
    }
};


resetButton.addEventListener('click', resetGrid);

homeButton.addEventListener('click', toggleScreen);

function resetGrid() {
    removeChildren()
    generateGrid(gridInput)
};

function removeChildren() {
    let cell = document.querySelector('#cell');
    while (screen.hasChildNodes()) {
        screen.removeChild(screen.firstChild);
    }
} 

sizeButton.addEventListener('click', 
function changeGrid () {
    removeChildren();
    gridInput = prompt("Choose between 2 and 50, to adjust the grid size.", 16);
    if(gridInput > 50) {
        alert("That value is too big")
        gridInput =  prompt("Choose between 2 and 50, to adjust the grid size.", 16)
    } else if(gridInput < 2) {
        alert("That value is too small")
        gridInput =  prompt("Choose between 2 and 50, to adjust the grid size.", 16)
    };
        generateGrid(gridInput);
});

colorButton.addEventListener('click',
function () {
if (colorState == 0){
    colorState++;
    colorButton.innerHTML = 'RGB'
} else if (colorState == 1){
    colorState++;
    colorButton.innerHTML = 'Eraser';
} else if (colorState == 2) {
    colorState = 0;
    colorButton.innerHTML = 'Black'
}
});

function toggleScreen () {
    let cell = document.querySelector('#cell');
    while (screen.hasChildNodes()) {
        screen.removeChild(screen.firstChild);
    };

}

const randomValue = Math.floor(Math.random() * 16777215).toString(16);
const randomColor = `#${randomValue}`;




generateGrid(16);  
arrayListeners();