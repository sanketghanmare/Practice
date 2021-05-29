function robbery(arr) {
    let first = 0;
    let second = 0;
    for (let i = 0; i < arr.length; i = i+2) {
        first += arr[i]
    }

    for (let i = 1; i < arr.length; i = i+2) {
        second += arr[i]
    }

    if (first > second) return first
    return second
}

console.log(robbery([1,2,3,1]))