// function makeArrayConsecutive2(statues) {
//     let numberOfStatues = 0
//     statues.sort();
//     for (let i = statues.length - 1; i >= 0; i--) {
//         if (statues[i] - statues[i-1] > 1) {
//             numberOfStatues += statues[i] - statues[i-1] - 1
//         }
//     }
//     return numberOfStatues
// }

function makeArrayConsecutive2(statues) {
    let smallest = Math.min(...statues)
    let biggest = Math.max(...statues)
    return Math.abs(biggest - smallest - statues.length + 1)
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]))