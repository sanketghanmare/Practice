function canSumTabulation(targetSum, arr) {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] === true) {
            for(let num of arr) {
                if (table)
                table[i+num] = true;
            }
        }
    }
    return table[targetSum];
}

console.log(canSumTabulation(7, [5,3,4]))