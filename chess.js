// chess.js

let selectedPiece = null;
let selectedSquare = null;

let turn = 'white';

document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('chessboard');
    let isLight = false;
    const pieces = [
        { piece: 'R', position: 0, color: 'white' }, // Rook
        { piece: 'N', position: 1, color: 'white' }, // Knight
        { piece: 'B', position: 2, color: 'white' }, // Bishop
        { piece: 'Q', position: 3, color: 'white' }, // Queen
        { piece: 'K', position: 4, color: 'white' }, // King
        { piece: 'B', position: 5, color: 'white' }, // Bishop
        { piece: 'N', position: 6, color: 'white' }, // Knight
        { piece: 'R', position: 7, color: 'white' }, // Rook

        { piece: 'P', position: 8, color: 'white' }, // Pawn
        { piece: 'P', position: 9, color: 'white' }, // Pawn
        { piece: 'P', position: 10, color: 'white' }, // Pawn
        { piece: 'P', position: 11, color: 'white' }, // Pawn
        { piece: 'P', position: 12, color: 'white' }, // Pawn
        { piece: 'P', position: 13, color: 'white' }, // Pawn
        { piece: 'P', position: 14, color: 'white' }, // Pawn
        { piece: 'P', position: 15, color: 'white' }, // Pawn


        { piece: 'P', position: 48, color: 'black' }, // Pawn
        { piece: 'P', position: 49, color: 'black' }, // Pawn
        { piece: 'P', position: 50, color: 'black' }, // Pawn
        { piece: 'P', position: 51, color: 'black' }, // Pawn
        { piece: 'P', position: 52, color: 'black' }, // Pawn
        { piece: 'P', position: 53, color: 'black' }, // Pawn
        { piece: 'P', position: 54, color: 'black' }, // Pawn
        { piece: 'P', position: 55, color: 'black' }, // Pawn

        { piece: 'R', position: 56, color: 'black' }, // Rook
        { piece: 'N', position: 57, color: 'black' }, // Knight
        { piece: 'B', position: 58, color: 'black' }, // Bishop
        { piece: 'Q', position: 59, color: 'black' }, // Queen
        { piece: 'K', position: 60, color: 'black' }, // King
        { piece: 'B', position: 61, color: 'black' }, // Bishop
        { piece: 'N', position: 62, color: 'black' }, // Knight
        { piece: 'R', position: 63, color: 'black' }, // Rook
    ];

    for (let i = 0; i < 64; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.classList.add(isLight ? 'light' : 'dark');
        board.appendChild(square);
        isLight = !isLight;
        if ((i + 1) % 8 == 0) isLight = !isLight;

        const piece = pieces.find(p => p.position === i);
        if (piece) {
            square.innerHTML = `<span class="piece ${piece.color}">${piece.piece}</span>`;
        }
    }

    document.querySelectorAll('.square').forEach(square => {
        square.addEventListener('click', function() {
            const pieceInSquare = this.querySelector('.piece');
    
            if (selectedPiece) {
                const selectedPieceColor = selectedPiece.classList.contains('white') ? 'white' : 'black';
                const pieceInSquareColor = pieceInSquare ? (pieceInSquare.classList.contains('white') ? 'white' : 'black') : null;
                
                // Capture functionality
                if (pieceInSquare && selectedPieceColor !== pieceInSquareColor) {
                    this.innerHTML = ''; // Remove the captured piece
                    this.appendChild(selectedPiece); // Move the selected piece to the new square
                    selectedPiece = null;
                    selectedSquare = null;
                    turn = turn === 'white' ? 'black' : 'white'; // Switch turn after capture
                } else if (!pieceInSquare) {
                    // Normal move functionality
                    this.appendChild(selectedPiece);
                    selectedPiece = null;
                    selectedSquare = null;
                    turn = turn === 'white' ? 'black' : 'white'; // Switch turn after move
                }
            } else if (pieceInSquare && pieceInSquare.classList.contains(turn)) {
                // Select the piece if it's the turn of its color
                selectedPiece = pieceInSquare;
                selectedSquare = this;
            }
        });
    });
    
});





function translateMove(move) {
    const piece = move[0];
    const destination = move.slice(1);

    const file = destination.charCodeAt(0) - 'a'.charCodeAt(0);
    const rank = 8 - parseInt(destination[1]);
    const position = rank * 8 + file;

    return { piece, position };
}

console.log(translateMove('Pe4')); // { piece: 'P', position: 28 }
console.log(translateMove('Nf3')); // { piece: 'N', position: 21 }
console.log(translateMove('Bb5')); // { piece: 'B', position: 33 }