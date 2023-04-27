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

// Piece Classes

class Piece{
    constructor(color){
        this.color = color;
    }
    capture(){

    }
    captured(){

    }
}

class King extends Piece{
    constructor(color){
        super(color);
        this.imgPath = () => {
            if(color === 'white') return './assets/images/wk.png';
            return './assets/images/bk.png';
        }
    }
}

class Queen extends Piece{
    constructor(color){
        super(color);
        this.imgPath = () => {
            if(color === 'white') return './assets/images/wq.png';
            return './assets/images/bq.png';
        }
    }
}

class Rook extends Piece{
    constructor(color){
        super(color);
        this.imgPath = () => {
            if(color === 'white') return './assets/images/wr.png';
            return './assets/images/br.png';
        }
    }
}

class Bishop extends Piece{
    constructor(color){
        super(color);
        this.imgPath = () => {
            if(color === 'white') return './assets/images/wb.png';
            return './assets/images/bb.png';
        }
    }
}

class Knight extends Piece{
    constructor(color){
        super(color);
        this.imgPath = () => {
            if(color === 'white') return './assets/images/wn.png';
            return './assets/images/bn.png';
        }
    }
}

class Pawn extends Piece{
    constructor(color){
        super(color);
        this.imgPath = () => {
            if(color === 'white') return './assets/images/wp.png';
            return './assets/images/bp.png';
        }
    }

    promotes(){

    }
}


