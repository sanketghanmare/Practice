function binarySearch(list, target) {
    // breaks list into half and compare
    list = list.sort();
    let first = 0;
    let last = list.length - 1;

    while (first <= last) {
        let midpoint = Math.floor(first + last / 2);
        if (list[midpoint] === target) return midpoint;
        if (list[midpoint] < target) {
            first = midpoint + 1;
        } else {
            last = midpoint - 1;
        }
    }
    return null;
}

console.log(binarySearch([2, 3, 412, 45, 6, 34, 6, 34, 3, 677, 9, 674, 0], 0))