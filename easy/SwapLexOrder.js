// function swapLexOrder(str, pairs) {
//
//     let newSet = new Set();
//
//     for (let item of pairs) {
//         let j = 0;
//         while( j !== str.length) {
//             let element = [...(item)]
//              str = swap(str,element[0]-1, element[1]-1)
//             newSet.add(str)
//             j++;
//         }
//     }
//     let o = repeater(newSet, pairs)
//     o.forEach(function (element) {
//         newSet.add(element)
//     })
//
//     let biggest = ""
//     newSet.forEach(function (element) {
//         if (biggest.length === 0) {
//             biggest = element
//         } else {
//             for (let i = 0; i < element.length; i++) {
//                 if (element.charAt(i) === biggest.charAt(i)) {
//                     continue
//                 } else if (element.charAt(i) > biggest.charAt(i)) {
//                     biggest = element
//                 } else {
//                     break
//                 }
//             }
//         }
//     })
//
// return biggest
// }
//
// function repeater(set, pairs) {
//     let s = new Set()
//     set.forEach(function (element) {
//         for (let i = 0; i < pairs.length; i++) {
//             let j = 0;
//             while( j !== element.length) {
//                 let ele = [...pairs[i]]
//                 element = swap(element,ele[0]-1, ele[1]-1)
//                 s.add(element)
//                 j++;
//             }
//         }
//     })
//     return s
// }
//
// function swap(str, first, second) {
//     let arr = str.split('')
//     let temp = arr[first]
//     arr[first] = arr[second]
//     arr[second] = temp
//     return arr.join('');
// }
 // console.log(swapLexOrder("abcdefgh",[[1,4], [7,8]]))

function swapLexOrder(string, indices) {
    let permutations = [string]
    let indexToGenerateFrom = 0
    while (indexToGenerateFrom <= permutations.length - 1) {
        for (let i = 0; i < indices.length; i++) {
            let permutation = applyPermutation(permutations[indexToGenerateFrom], indices[i])
            if (permutations.indexOf(permutation) === -1) {
                permutations.push(permutation)
            }
        }
        indexToGenerateFrom++
    }
    return permutations.sort().pop()
}

function applyPermutation(string, indices) {
    let array = string.split('')
    let temp = array[indices[0]-1]
    array[indices[0]-1] = array[indices[1]-1]
    array[indices[1]-1] = temp
    return array.join('')
}

// function swapLexOrder(str, pairs) {
//     pairs.forEach((pair,i)=>{
//         pairs[i] = [pair[0]-1, pair[1]-1]
//     })
//     const linked = [];
//     for (let i=0; i<str.length; i++) {
//         linked.push(new Set([i]))
//     }
//     for (let [x,y] of pairs) {
//         linked[x].add(y)
//         linked[y].add(x)
//     }
//
//     var group
//     var groups = new Set()
//     for (let i=0; i<linked.length; i++) {
//         const set = linked[i]
//         if (set.size > 1) {
//             group = new Set()
//             set.forEach((v) => {
//                 make_group(v) })
//             const arr = setToArray(group).sort((a,b) => a-b)
//             // const arr = sorting(setToArray(group))
//             if (!isInGroups(groups, arr)) {
//                 groups.add((arr))
//             }
//         }
//     }
//
//     function setToArray(set) {
//         const list = []
//         set.forEach( (v) => { list.push(v) })
//         return list
//     }
//
//     function isInGroups(groups, arr) {
//         let result = false
//         for (let v of groups) {
//             if (v.length === arr.length) {
//                 result = true;
//                 for (let i=0; i<v.length; i++) {
//                     if (v[i] !== arr[i]) {
//                         result = false
//                         break
//                     }
//                 }
//                 if (result) return result
//             }
//         }
//         return false
//     }
//
//     function make_group(index) {
//         linked[index].forEach((v) => {
//             if (!group.has(v)) {
//                 group.add(v)
//                 make_group(v)
//             }
//         })
//     }
//
//     const word = str.split('')
//     groups.forEach((group) => {
//         const L = setToArray(group)
//         let chars = []
//         for (let i=0; i<L.length; i++) {
//             chars.push(str[L[i]])
//         }
//         chars.sort()
//         L.forEach((l) => {  word[l] = chars.pop()  })
//     })
//     return word.join('')
// }
//

console.log(swapLexOrder("acxrabdz",[[1,3],
    [6,8],
    [3,8],
    [2,7]]))
