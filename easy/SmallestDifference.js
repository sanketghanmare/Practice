function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
    arrayOne.sort(function (a,b) {
        return a - b;
    });

    arrayTwo.sort(function (a,b) {
        return a - b;
    });

    let minimum = null;
    let elements = []
    for (let i = 0; i < arrayOne.length; i++) {
        for (let j = 0; j < arrayTwo.length; j ++) {
            let diff = Math.abs(arrayOne[i] - arrayTwo[j])
            if (minimum == null) {
                minimum = diff

            } else if (diff < minimum){
                elements = []
                minimum = diff;
                elements.push(arrayOne[i])
                elements.push(arrayTwo[j])
            }
        }
    }

    // console.log(arrayOne)
    return elements
}

arrayOne = [-1, 5, 10, 20, 28, 3];
arrayTwo = [26, 134, 135, 15, 17];

console.log(smallestDifference(arrayOne, arrayTwo));
