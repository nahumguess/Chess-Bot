function translateMove(move) {
    const piece = move[0];
    const destination = move.slice(1);

    const file = destination.charCodeAt(0) - 'a'.charCodeAt(0);
    const rank = 8 - parseInt(destination[1], 10);
    const position = (rank * 8) + file;

    return { piece, position };
}

console.log(translateMove('Pa1')); // Should return position 56
console.log(translateMove('Nh8')); // Should return position 7
console.log(translateMove('Ke2')); // Additional test case, should return position 52
console.log(translateMove('Rd7')); // Additional test case, should return position 11
