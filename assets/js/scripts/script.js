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
        tiles.set(this.file + this.rank, this);
        this.clicked = () => {
            console.log(this.file + String(this.rank));
        }
    }
}

// Generate Board
const tiles = new Map();
const letters = ['a','b','c','d','e','f','g','h'];
for(let i = 0; i < 64; i++){
    let file = letters[Math.floor(i / 8)];
    let rank = i % 8 + 1;
    let color = (i + Math.floor(i / 8)) % 2 ? "white" : "burlywood";
    let element = document.createElement('div');
    element.setAttribute('id', file + rank);
    element.setAttribute('style', `width: ${squareWidth}px; height: ${squareWidth}px; background-color: ${color}`);
    chessBoardElement.prepend(element);

    let tile = new Tile(file, rank, color, element);
    tile.element.addEventListener('click', tile.clicked);
}
console.log(tiles);

// Piece Classes

class Piece{
    constructor(color, element){
        this.color = color;
        this.element = element;
    }
    capture(){

    }
    captured(){

    }
}

class King extends Piece{
    constructor(color, element){
        super(color, element);
    }
    imgPath(){
        if(this.color === 'white') return './assets/images/wk.png';
        return './assets/images/bk.png';
    }
}

class Queen extends Piece{
    constructor(color, element){
        super(color, element);
    }
    imgPath(){
        if(this.color === 'white') return './assets/images/wq.png';
        return './assets/images/bq.png';
    }
}

class Rook extends Piece{
    constructor(color, element){
        super(color,element);
    }
    imgPath(){
        if(this.color === 'white') return './assets/images/wr.png';
        return './assets/images/br.png';
    }
}

class Bishop extends Piece{
    constructor(color, element){
        super(color, element);
    }
    imgPath(){
        if(this.color === 'white') return './assets/images/wb.png';
        return './assets/images/bb.png';
    }
}

class Knight extends Piece{
    constructor(color, element){
        super(color, element);
    }
    imgPath(){
        if(this.color === 'white') return './assets/images/wn.png';
        return './assets/images/bn.png';
    }
}

class Pawn extends Piece{
    constructor(color, element){
        super(color, element);
    }
    
    imgPath(){
        if(this.color === 'white') return './assets/images/wp.png';
        return './assets/images/bp.png';
    }
    promotes(){

    }
}

const whitePieces = [];
const blackPieces = [];
const start = function(){
    // create and place black pawns
    // create and place white pawns
    letters.forEach( (file) => {
        let blackPawnTile = tiles.get(`${file}7`).element;
        let blackPawnElement = document.createElement('img');
        let whitePawnTile = tiles.get(`${file}2`).element;
        let whitePawnElement = document.createElement('img');
        blackPawnElement.setAttribute('style', 'z-index: 2; display: block; margin-left: auto; margin-right: auto; width: 100%');
        whitePawnElement.setAttribute('style', 'z-index: 2; display: block; margin-left: auto; margin-right: auto; width: 100%');
        let blackPawn = new Pawn('black', blackPawnElement);
        let whitePawn = new Pawn('white', whitePawnElement);
        blackPawnElement.setAttribute('src', blackPawn.imgPath());
        whitePawnElement.setAttribute('src', whitePawn.imgPath());
        blackPawnTile.append(blackPawnElement);
        whitePawnTile.append(whitePawnElement);
        whitePieces.push(whitePawn);
        blackPieces.push(blackPawn);
    });
    // create and place black pieces
    
    // create and place black pieces

}
start();