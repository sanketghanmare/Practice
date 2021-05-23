function DepositProfit(deposit, rate, threshold) {
    let count = 0
    while (deposit < threshold) {
        deposit += deposit*(rate/100)
        count++
    }
    return count
}

console.log(DepositProfit(100,20,170))
console.log(DepositProfit(1,100,64))