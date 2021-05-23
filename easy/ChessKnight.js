function chessKnight(cell) {
    let arr = cell.split('');
    if ((cell.charCodeAt(0) === 97 || cell.charCodeAt(0)  === 104)  && (parseInt(arr[1]) === 1 || parseInt(arr[1]) === 8)) {
        return 2;
    }

    if ((cell.charCodeAt(0) === 98 || cell.charCodeAt(0)  === 103)  && (parseInt(arr[1]) === 1 || parseInt(arr[1]) === 8)) {
        return 3;
    }

    if ((cell.charCodeAt(0) === 99 || cell.charCodeAt(0)  === 100
        || cell.charCodeAt(0) === 101 || cell.charCodeAt(0)  === 102)  && (parseInt(arr[1]) === 1 || parseInt(arr[1]) === 8)) {
        return 4;
    }
}

console.log(chessKnight("a1"))
console.log(chessKnight("b1"))
console.log(chessKnight("d1"))