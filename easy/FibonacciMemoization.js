/**
 * Memoization
 * js object, key will be arg to fn, value will be the return value
 */
function fibbonnaciMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 2) {
        return  1;
    }

    memo[n] = fibbonnaciMemo(n - 1, memo) + fibbonnaciMemo(n - 2, memo)
    return memo[n];
}

console.log(fibbonnaciMemo(10))