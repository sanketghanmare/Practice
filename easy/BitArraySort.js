function bitArraySort(arr) {
    let mid = 0;
    for (let i =0; i < arr.length; i++) {
        if (arr[i] === 0) {
            [arr[mid], arr[i]] = [arr[i], arr[mid]];
            mid++;
        }
    }
    return arr;
}

console.log(bitArraySort([1,1,1,0,1,0,1]))