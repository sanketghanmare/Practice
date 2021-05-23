function targetedSum(input, target) {

    let remaining = Infinity;

    for (let i = 0; i < input.length; i++) {
        let newVal = target - input[i];
        if (remaining > newVal) {
            remaining = newVal;
            if (input.indexOf(remaining) > -1) {
                return true;
            }
        }
    }
    return false;
}

/**
 * Alternate hash based implementation
 */

function targetSumHashSolution(input, target) {
    let hash = {};
    let current;
    for (let i = 0; i < input.length; i++) {
        current = input[i];
        if (hash[current]) {
            return true;
        } else {
            hash[target - current] = true;
        }
    }

    return false;
}

console.log(targetedSum([4,2,6,5,7,9,10],13))
console.log(targetSumHashSolution([4,2,6,5,7,9,10],13))