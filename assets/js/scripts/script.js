// HTML elements
const chessBoardElement = document.getElementById('chess-board');

// Style HTML elements
const chessBoardWidth = 720;
const squareWidth = chessBoardWidth / 8;
chessBoardElement.setAttribute('style', `width: ${chessBoardWidth + 2}px; height: ${chessBoardWidth + 2}px; border: 1px solid black; display: flex; margin: 200px; flex-wrap: wrap-reverse; flex-direction: column;`);


class Tile{
    constructor(file, rank, color, element){
        this.file = file;
        this.rank = rank;
        this.color = color;
        this.element = element;
        tiles.set(file + rank, this);
    }
}

// Generate Board
const tiles = new Map();
const letters = ['a','b','c','d','e','f','g','h'];
for(let i = 0; i < 64; i++){
    let file = letters[Math.floor(i / 8)];
    let rank = i % 8 + 1;
    let color = (i + Math.floor(i / 8)) % 2 ? "white" : "black";
    let element = document.createElement('div');
    element.setAttribute('id', file + rank);
    element.setAttribute('style', `width: ${squareWidth}px; height: ${squareWidth}px; background-color: ${color}`);
    chessBoardElement.prepend(element);

    new Tile(file, rank, color, element);
}
console.log(tiles);