function possibleSums(coins, quantity) {
    let uniqueCountSet = new Set([0])
    for(let i = 0; i < quantity.length; i ++) {
        let localSum = [...uniqueCountSet];
        for(let element of localSum) {
            for(let j = 1; j <=quantity[i]; j++) {
                uniqueCountSet.add(element + j * coins[i])
            }
        }
    }
    return uniqueCountSet.size - 1;

}

console.log(possibleSums([10, 50, 100],[1, 2, 1]))
