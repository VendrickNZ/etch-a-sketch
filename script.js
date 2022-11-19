const container = document.getElementById('container');
const applyGrid = document.querySelector('#apply');
const resetBtn = document.getElementById('resetBtn');
let gridSizeValue = document.querySelector('.grid-size');
let gridSize = document.querySelector('input');
let currentGridSize = 16;

let randomColour = () => Math.floor(Math.random()*16777215).toString(16);

function generateDiv(size) {
    const div = document.createElement('div');
    div.classList.add('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;

    return div;
}

function generateGrid(currentGridSize) {
    for (i = 0; i < currentGridSize**2; i++) {
        container.appendChild(generateDiv(container.clientWidth / currentGridSize))
    }
}

function generateColour() {
    const gridItems = document.querySelectorAll('.container > div');
    gridItems.forEach((item) => {
        item.style.backgroundColor = 'white';
        item.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = `#${randomColour()}`;
        });
    });
};

function reset() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    generateGrid(currentGridSize);
    generateColour();
}
container.addEventListener('mouseover', function (e) {
    // Add the "active" class to only divs with a "box" class
    if (e.target.matches('.div')) {
        e.target.classList.add('active');
    }
});

gridSize.addEventListener('input', function (e) {
    currentGridSize = e.target.value;
    gridSizeValue.textContent = `${currentGridSize}x${currentGridSize}`;
});

applyGrid.addEventListener('click', function () {
    reset();
});
resetBtn.addEventListener('click', reset);

generateGrid(currentGridSize);
generateColour();