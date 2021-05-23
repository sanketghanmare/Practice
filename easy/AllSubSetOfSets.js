
function allSubSetOfSets(array) {

    let subset = [];
    helper(array,subset,0);

}

function helper(array, subset, i) {

    if (i === array.length) {
        console.log(subset)
    } else {
        subset[i] = "-"
        helper(array, subset, i+1)
        subset[i] = array[i]
        helper(array, subset, i+1)
    }
}

console.log(allSubSetOfSets([1,2]))
// console.log(allSubSetOfSets([1,2,3,4,5]))
console.log(allSubSetOfSets([1]))