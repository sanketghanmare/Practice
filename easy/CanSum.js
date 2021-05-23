function canSum(target, numbers) {
    if (target === 0) {
        return true
    }
    if (target < 0) {
        return false
    }

    for (let num of numbers) {
         const remainder = target - num;
        if (canSum(remainder, numbers) === true) {
            return true
        }
     }

    return false
}

console.log(canSum(7,[2,3]))
console.log(canSum(7,[2,3,4]))