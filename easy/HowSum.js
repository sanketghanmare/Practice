function howSum(targetSum, numbers) {

    if (targetSum === 0) {
        return []
    }

    if (targetSum < 0) {
        return null
    }

    for (let num of numbers) {
        const remainder = targetSum - num;
        const result = howSum(remainder, numbers);
        if (result !== null) {
            return [ ...result, num];
        }
    }

    return null;
}

console.log(howSum(7,[2,3]))
console.log(howSum(7,[5,3,4,7]))
console.log(howSum(7,[2,4]))
console.log(howSum(8,[2,3,5]))
console.log(howSum(300,[7,14]))