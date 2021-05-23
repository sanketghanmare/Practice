function comparator(str1,str2) {
    let count = 0;

    const obj1 = str1.split("");
    const obj2 = str2.split("");

    for (let i =0; i < obj1.length; i++) {
        if (obj1[i] !== obj2[i]) count++
    }

    return count;
}

function stringsRearrangement(inputArray) {
    inputArray.sort()
    let strLen = inputArray[0].length
    for (let i = 0; i < inputArray.length - 1; i++) {
        let count = comparator(inputArray[i], inputArray[i+1])
        if(count > 1) {
            return false
        }
    }

    return true
}

// console.log(stringsRearrangement(
//     ["zzzzab",
//         "zzzzbb",
//         "zzzzaa"]
// ))
//
//
// console.log(stringsRearrangement(
//     ["aba",
//     "bbb",
//     "bab"]))
//
// console.log(stringsRearrangement(
//     ["ab",
//         "bb",
//         "aa"]))

console.log(stringsRearrangement(
    ["abc",
        "abx",
        "axx",
        "abc"]))
