generateGrid();

function generateGrid(rows = 5, columns = 5) {
    deleteGrid();
    const canvas = document.querySelector('#grid-container');
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
    const boxes = document.querySelectorAll('.item');
    boxes.forEach(box => box.addEventListener(
        'mouseover',
        () => box.classList.add('fill')
    ));
}

function askUser() {
    rows = prompt('How many rows?');
    columns = prompt('How many columns?');
    const boxes = document.querySelectorAll('.item');
    generateGrid(rows, columns)
}

function resetGrid() {
    const boxes = document.querySelectorAll('.item');
    boxes.forEach(box => box.classList.remove('fill'));
}

function deleteGrid() {
    const canvas = document.querySelector('#grid-container');
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => canvas.removeChild(row));
}

const btnReset =  document.querySelector('#grid-reset');
btnReset.addEventListener('click', resetGrid);

const btnSettings = document.querySelector('#grid-settings');
btnSettings.addEventListener('click', askUser);