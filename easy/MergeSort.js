
/**
 * Sort the list in ascending order and returns a list
 * @param list to sort
 * @constructor
 *
 * Steps:-
 *
 * Divide: Find the midpoint of the list and divide into sublists
 * Conquer: Recursively sort the sublists created in previous step
 * Combine: Merge the sorted sublists created in previous step
 *
 */
function MergeSort(list) {

    if(list.length <= 1) {
        return list
    }

    let midpoint = Math.floor(list.length/2)
    let left = new MergeSort(list.slice(0,midpoint))
    let right = new MergeSort(list.slice(midpoint))

    return Merge(left,right)
}
/**
 * Merges two lists and sort them in process
 * @param left
 * @param right
 * @returns a new merge list
 */
function Merge(left, right) {
    let list = []
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            list.push(left[i])
            i++;
        } else {
            list.push(right[j])
            j++;
        }
    }

    while (i < left.length) {
        list.push(left[i])
        i++;
    }

    while (j < right.length) {
        list.push(right[j])
        j++;
    }

    return list;
}

function verifySort(list) {

    let n = list.length

    if(n===0 || n === 1) {
        return true
    }

    return  list[0] < list[1] && verifySort(list.slice(2))

}

let list = [3,2,1,4,5,6,9,0]

let l = new MergeSort(list)

console.log(l)
console.log(verifySort(l))
console.log(verifySort(list))