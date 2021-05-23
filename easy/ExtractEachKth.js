function extractEachKth(inputArray, k) {

    let arr = []

    if(k === 1) {
        return []
    }

    let len = inputArray.length
    let reject = k-1;

    for(let i =0; i < len; i++) {

        if(!(i === reject)){

            arr.push(inputArray[i]);
        }
        else{
            reject += k;
        }

    }
    return arr
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))
console.log(extractEachKth([1, 1, 1, 1, 1], 1))
console.log(extractEachKth([1, 2, 1, 2, 1, 2, 1, 2], 2))