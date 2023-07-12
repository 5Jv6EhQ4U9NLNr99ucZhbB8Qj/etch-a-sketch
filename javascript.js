/*
User should be able to hover over grid squares to change its colour

Grid generation
Colour change on hover
Button to reset
Button to change grid size
*/

generateGrid(16, 16);

function generateGrid(rows, columns) {
    const canvas = document.querySelector('body');
    for (let i = 0; i < rows; i++) {
        console.log(i);
        const newRow = document.createElement('div');
        newRow.classList = 'row';
        canvas.appendChild(newRow);
        for (let j = 0; j < columns; j++) {
            console.log(j);
            const newItem = document.createElement('div');
            newRow.appendChild(newItem);
        }
    }
}
