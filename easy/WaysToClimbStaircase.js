function numWays(n, memo = {}) {

    if (n in memo) {
        return memo[n]
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    memo[n] = numWays(n-1, memo) + numWays(n - 2, memo)
    return memo[n]
}

console.log(numWays(10))