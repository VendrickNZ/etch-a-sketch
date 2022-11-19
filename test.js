// const container = document.getElementById('container');
// const applyGrid = document.querySelector('#apply');
// const resetBtn = document.getElementById('resetBtn');
// let gridSizeValue = document.querySelector('.grid-size');
// let gridSize = document.querySelector('input');
// let currentGridSize = 16;


// let randomColour = () => Math.floor(Math.random()*16777215).toString(16);

// function generateDiv(size) {
//     const div = document.createElement('div');
//     div.classList.add('div');
//     div.style.width = `${size}px`;
//     div.style.height = `${size}px`;

//     return div;
// }

// function generateGrid(currentGridSize) {
//     for (let i = 0; i < currentGridSize**2; i++) {
//         console.log(container.clientWidth, container.clientHeight);
//         container.appendChild(generateDiv(container.clientWidth / currentGridSize));
//     };
// };

// function generateColour() {
//     const gridItems = document.querySelectorAll('.container > div');
//     gridItems.forEach((item) => {
//         item.style.backgroundColor = 'white';
//         item.addEventListener('mouseenter', (e) => {
//             e.target.style.backgroundColor = `#${randomColour()}`;
//         });
//     });
// };

// resetBtn.addEventListener('click', function resetGridColour() {
//     generateColour()
// })

// gridSize.addEventListener('input', function(e) {
//     currentGridSize = e.target.value;
//     gridSizeValue.textContent = `${currentGridSize}x${currentGridSize}`;
// })

// applyGrid.addEventListener('click', function() {
//     resetGrid();
// });

// function resetGrid() {
//     while (container.firstChild) {
//         container.removeChild(container.lastChild);
//     }
//     generateGrid(currentGridSize);
//     generateColour();
// }

// generateGrid(currentGridSize)
// generateColour()