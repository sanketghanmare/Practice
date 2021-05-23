function gridTravellerMemo(m,n, memo = {}) {
    const key = m + ',' + n;
    // are the coordinates in memory
    // let reverseKey = key.split("").reverse().join();
    if (key in memo) {
        return memo[key]
    }

    if (m === 1 && n === 1) {
        return 1;
    }

    if (m === 0 || n === 0) {
        return 0
    }

    memo[key] = gridTravellerMemo(m - 1, n, memo) + gridTravellerMemo(m , n-1, memo)
    return memo[key]
}


console.log(gridTravellerMemo(1,1))
console.log(gridTravellerMemo(2,3))
console.log(gridTravellerMemo(3,2))
console.log(gridTravellerMemo(3,3))
console.log(gridTravellerMemo(4,4))
console.log(gridTravellerMemo(10,10))
console.log(gridTravellerMemo(18,18))