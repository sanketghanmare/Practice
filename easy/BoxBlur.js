function boxBlur(image) {
    let yo = 0;
    let newArr = [];
    let sum;
    let row = image.length;
    let col = image[0].length;
    for (let x = 0; x < row; x++) {
        let arr = [];
        for (let y = 0; y < col; y++) {
            if (x < 1 || y < 1 || x + 1 === row || y + 1 === col) {
                continue;
            }

            sum =
                image[x - 1][y - 1] + // Top left
                image[x - 1][y] + // Top center
                image[x - 1][y + 1] + // Top right
                image[x][y - 1] + // Mid left
                image[x][y] + // Current pixel
                image[x][y + 1] + // Mid right
                image[x + 1][y - 1] + // Low left
                image[x + 1][y] + // Low center
                image[x + 1][y + 1];// Low right

            yo = Math.floor(sum / 9);


            if (yo !== 0) {
                arr.push(yo);
            }
        }

        if (arr.length > 0) {
            newArr.push(arr);
        }

        yo = 0;
    }
    return newArr;
}

// console.log(boxBlur([[1, 1, 1], [1, 7, 1], [1, 1, 1]]))
console.log(boxBlur(
    [
        [36, 0, 18, 9, 9, 45, 27],
        [27, 0, 54, 9, 0, 63, 90],
        [81, 63, 72, 45, 18, 27, 0],
        [0, 0, 9, 81, 27, 18, 45],
        [45, 45, 27, 27, 90, 81, 72],
        [45, 18, 9, 0, 9, 18, 45],
        [27, 81, 36, 63, 63, 72, 81]
    ]))
// console.log(boxBlur([[7,4,0,1],
//     [5,6,2,2],
//     [6,10,7,8],
//     [1,4,2,0]]))
// console.log(boxBlur(
//     [
//         [36,0,18,9],
//         [27,54,9,0],
//         [81,63,72,45]
//     ]))