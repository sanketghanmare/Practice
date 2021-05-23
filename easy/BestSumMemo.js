function bestSumMemo(targetSum, numbers, memo = {}) {

    if (targetSum in memo) {
        return memo[targetSum]
    }

    if (targetSum === 0) {
        return [];
    }

    if (targetSum < 0) {
        return null;
    }

    let shortestCombination = null

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSumMemo(remainder, numbers, memo)
        if (remainderCombination !== null) {
            const combination = [ ...remainderCombination, num];

            // if the combination is shorter than the current "shortest", update it
            if ( shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    memo[targetSum] = shortestCombination;
    return shortestCombination
}

console.log(bestSumMemo(7,[2,3]))
console.log(bestSumMemo(7,[5,3,4,7]))
console.log(bestSumMemo(7,[2,4]))
console.log(bestSumMemo(8,[2,3,5]))
console.log(bestSumMemo(8,[1,4,5]))
console.log(bestSumMemo(300,[7,14]))