function Minesweeper(matrix) {

    let row = matrix.length
    let col = matrix[0].length
    let newArr = []
    for (let x = 0; x < row; x++) {
        let count = 0
        let arr = [];
        for (let y = 0; y < col; y++) {

            if (x === 0 && y === 0) {
                //Currents' right
                if (matrix[x][y+1] === true) {
                    count ++
                }

                //Currents' bottom right
                if (matrix[x+1][y+1] === true) {
                    count ++
                }

                //Currents' bottom center
                if (matrix[x+1][y] === true) {
                    count ++
                }

            } else if(x === 0) {
                //Currents' right
                if (matrix[x][y+1] === true) {
                    count ++
                }

                //Currents' bottom right
                if (matrix[x+1][y+1] === true) {
                    count ++
                }

                //Currents' bottom center
                if (matrix[x+1][y] === true) {
                    count ++
                }

                //Currents' bottom left
                if (matrix[x+1][y-1] === true) {
                    count ++
                }

                //Currents' left
                if (matrix[x][y-1] === true) {
                    count ++
                }

            }

            else if(x === row - 1) {
                //Currents' right
                if (matrix[x][y+1] === true) {
                    count ++
                }

                //Currents' top right
                if (matrix[x-1][y+1] === true) {
                    count ++
                }

                //Currents' top center
                if (matrix[x-1][y] === true) {
                    count ++
                }

                //Currents' left
                if (matrix[x][y-1] === true) {
                    count ++
                }

                //Currents' top left
                if (matrix[x-1][y-1] === true) {
                    count ++
                }

            }

            else {
                //Currents' right
                if (matrix[x][y+1] === true) {
                    count ++
                }

                //Currents' bottom right
                if (matrix[x+1][y+1] === true) {
                    count ++
                }

                //Currents' bottom center
                if (matrix[x+1][y] === true) {
                    count ++
                }

                //Currents' bottom left
                if (matrix[x+1][y-1] === true) {
                    count ++
                }

                //Currents' left
                if (matrix[x][y-1] === true) {
                    count ++
                }

                //Currents' top left
                if (matrix[x-1][y-1] === true) {
                    count ++
                }

                //Currents' top center
                if (matrix[x-1][y] === true) {
                    count ++
                }

                //Currents' top right
                if (matrix[x-1][y+1] === true) {
                    count ++
                }
            }

            arr.push(count)
            count = 0
        }


        newArr.push(arr)

    }
    return newArr
}

console.log(Minesweeper(
    [
        [true,false,false],
        [false,true,false],
        [false,false,false]]))