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
    constructor(color, startingTile){
        this.color = color;
        this.startingTile = startingTile;
    }
    capture(){

    }
    captured(){

    }
}

class King extends Piece{
    constructor(color, startingTile){
        super(color, startingTile);
        this.init = function(){
            if(this.color === 'white'){
                whitePieces.push(this);
                return './assets/images/wk.png';
            } 
            blackPieces.push(this);
            return './assets/images/bk.png';
        }
        this.element = document.createElement('img');
        this.element.setAttribute('style', 'z-index: 2; display: block; margin-left: auto; margin-right: auto; width: 100%');
        this.element.setAttribute('src', this.init());
        this.startingTile.element.append(this.element);
    }
}

class Queen extends Piece{
    constructor(color, startingTile){
        super(color, startingTile);
        this.init = function(){
            if(this.color === 'white'){
                whitePieces.push(this);
                return './assets/images/wq.png';
            } 
            blackPieces.push(this);
            return './assets/images/bq.png';
        }
        this.element = document.createElement('img');
        this.element.setAttribute('style', 'z-index: 2; display: block; margin-left: auto; margin-right: auto; width: 100%');
        this.element.setAttribute('src', this.init());
        this.startingTile.element.append(this.element);
    }
}

class Rook extends Piece{
    constructor(color, startingTile){
        super(color, startingTile);
        this.init = function(){
            if(this.color === 'white'){
                whitePieces.push(this);
                return './assets/images/wr.png';
            } 
            blackPieces.push(this);
            return './assets/images/br.png';
        }
        this.element = document.createElement('img');
        this.element.setAttribute('style', 'z-index: 2; display: block; margin-left: auto; margin-right: auto; width: 100%');
        this.element.setAttribute('src', this.init());
        this.startingTile.element.append(this.element);
    }
}

class Bishop extends Piece{
    constructor(color, startingTile){
        super(color, startingTile);
        this.init = function(){
            if(this.color === 'white'){
                whitePieces.push(this);
                return './assets/images/wb.png';
            } 
            blackPieces.push(this);
            return './assets/images/bb.png';
        }
        this.element = document.createElement('img');
        this.element.setAttribute('style', 'z-index: 2; display: block; margin-left: auto; margin-right: auto; width: 100%');
        this.element.setAttribute('src', this.init());
        this.startingTile.element.append(this.element);
    }
}

class Knight extends Piece{
    constructor(color, startingTile){
        super(color, startingTile);
        this.init = function(){
            if(this.color === 'white'){
                whitePieces.push(this);
                return './assets/images/wn.png';
            } 
            blackPieces.push(this);
            return './assets/images/bn.png';
        }
        this.element = document.createElement('img');
        this.element.setAttribute('style', 'z-index: 2; display: block; margin-left: auto; margin-right: auto; width: 100%');
        this.element.setAttribute('src', this.init());
        this.startingTile.element.append(this.element);
    }
}

class Pawn extends Piece{
    constructor(color, startingTile){
        super(color, startingTile);
        this.init = function(){
            if(this.color === 'white'){
                whitePieces.push(this);
                return './assets/images/wp.png';
            } 
            blackPieces.push(this);
            return './assets/images/bp.png';
        }
        this.element = document.createElement('img');
        this.element.setAttribute('style', 'z-index: 2; display: block; margin-left: auto; margin-right: auto; width: 100%');
        this.element.setAttribute('src', this.init());
        this.startingTile.element.append(this.element);
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
        new Pawn('black', tiles.get(`${file}7`));
        new Pawn('white', tiles.get(`${file}2`));
    });
    // create and place black pieces
    new Rook('black', tiles.get('a8'));
    new Knight('black', tiles.get('b8'));
    new Bishop('black', tiles.get('c8'));
    new Queen('black', tiles.get('d8'));
    new King('black', tiles.get('e8'));
    new Bishop('black', tiles.get('f8'));
    new Knight('black', tiles.get('g8'));
    new Rook('black', tiles.get('h8'));
    // create and place black pieces
    new Rook('white', tiles.get('a1'));
    new Knight('white', tiles.get('b1'));
    new Bishop('white', tiles.get('c1'));
    new Queen('white', tiles.get('d1'));
    new King('white', tiles.get('e1'));
    new Bishop('white', tiles.get('f1'));
    new Knight('white', tiles.get('g1'));
    new Rook('white', tiles.get('h1'));
}
start();