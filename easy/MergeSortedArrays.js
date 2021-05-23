function mergeSortedArrays(arr1, arr2) {
    let newArr = [];
    let one = 0;
    let two = 0;
    while (one < arr1.length || two < arr2.length) {
        if (arr1[one] < arr2[two]) {
            newArr.push(arr1[one])
            one ++;
            continue;
        }
        if (arr2[two] < arr1[one] ) {
            newArr.push(arr2[two])
            two ++;
            continue;
        }

        if (arr1[one] === arr2[two] ) {
            newArr.push(arr1[one])
            newArr.push(arr2[two])
            one++;
            two++;
            continue;
        }
        if (two === arr2.length && one !== arr1.length) {
            newArr.push(arr1[one]);
            one++;
            continue;
        }

        if (one === arr1.length && two !== arr2.length) {
            newArr.push(arr2[two]);
            two++;
        }
    }
    return newArr;
}


console.log(mergeSortedArrays([1,3,5,7],[2,4]))
console.log(mergeSortedArrays([1,3,5,7],[]))
console.log(mergeSortedArrays([],[]))