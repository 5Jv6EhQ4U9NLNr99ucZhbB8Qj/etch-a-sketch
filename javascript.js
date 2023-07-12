/*
User should be able to hover over grid squares to change its colour

Grid generation
Colour change on hover
Button to reset
Button to change grid size
*/

generateGrid(100, 100);

function generateGrid(rows, columns) {
    const canvas = document.querySelector('body');
    for (let i = 0; i < rows; i++) {
        const newRow = document.createElement('div');
        newRow.classList = 'row';
        canvas.appendChild(newRow);
        for (let j = 0; j < columns; j++) {
            const newItem = document.createElement('div');
            newItem.classList = 'item';
            newRow.appendChild(newItem);
        }
    }
}

const boxes = document.querySelectorAll('.item');
boxes.forEach(box => box.addEventListener(
    'mouseover',
    () => box.classList.add('fill')
));
