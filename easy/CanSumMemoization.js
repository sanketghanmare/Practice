function canSumMemoization(targetSum, numbers, memo = {}) {

    if (targetSum in memo) {
        return memo[targetSum];
    }

    if (targetSum === 0 ) {
        return true;
    }

    if (targetSum < 0) {
        return false;
    }

    for (let num of numbers) {
        let remainder = targetSum - num;

        if (canSumMemoization(remainder, numbers, memo) === true) {
            memo[targetSum] = true
            return true;
        }
    }
    memo[targetSum] = false;
    return memo[targetSum];
}

console.log(canSumMemoization(7,[2,5]))
console.log(canSumMemoization(7,[2,4]))
console.log(canSumMemoization(7,[7]))
console.log(canSumMemoization(7,[2,3,4]))
console.log(canSumMemoization(300,[7,14]))
console.log(canSumMemoization(1,[1]))