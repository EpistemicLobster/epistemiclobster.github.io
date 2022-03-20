const screen = document.querySelector("#screen");
const resetButton = document.querySelector('#one');
const colorButton = document.querySelector('#two');
const sizeButton = document.querySelector('#three');
const homeButton = document.querySelector('#home');
let gridInput = 16;
let colorState = 0;
let target;
let cell;


//generate a grid via append cells to screen

function generateGrid(gridInput) {
        for (let i = 0; i < gridInput * gridInput; i++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            screen.appendChild(cell);
        };
        screen.style.setProperty('--grid-rows', gridInput)
        screen.style.setProperty('--grid-cols', gridInput)
    const grids = Array.from(document.querySelectorAll('cell'));
    grids.forEach(grid => grid.addEventListener('mouseover', function() {
    if (colorState == 0) {
        grid.style.backgroundColor = 'black'
    } else {
        grid.style.backgroundColor = 'blue'
    };
    }))
    }


screen.addEventListener('mouseover', function (e) {
    target = e.target
    if(e.target.classList == 'cell') {
        changeColor(target)
    }

});



function changeColor (target) {
    if (colorState == 0) {
        target.style.backgroundColor = 'black';
      } else if (colorState == 1) {
        target.style.backgroundColor = 'blue';
      } else if (colorState == 2) {
        target.style.backgroundColor = 'red';
      } else if (colorState == 3) {
        target.style.backgroundColor = 'green';
      } else if (colorState == 4) {
        target.style.backgroundColor = 'yellow';
      } else if (colorState == 5) {
        target.style.backgroundColor = 'white';
      }
}



resetButton.addEventListener('click', resetGrid);

homeButton.addEventListener('click', toggleScreen);

function resetGrid () {
    let cell = document.querySelector('#cell');
    while (screen.hasChildNodes()) {
        screen.removeChild(screen.firstChild);
    }
    generateGrid(gridInput)
};

sizeButton.addEventListener('click', 
function changeGrid () {
    let cell = document.querySelector('#cell');
    while (screen.hasChildNodes()) {
        screen.removeChild(screen.firstChild);
    };
    gridInput = prompt("Choose between 1 and 100, to adjust the grid size.", 16);
    generateGrid(gridInput);
    console.log(userInput)
});

colorButton.addEventListener('click',
function () {
if (colorState < 5){
    colorState++;
} else {
    colorState = 0;
}});

function toggleScreen () {
    let cell = document.querySelector('#cell');
    while (screen.hasChildNodes()) {
        screen.removeChild(screen.firstChild);
    };

}

generateGrid(16);   