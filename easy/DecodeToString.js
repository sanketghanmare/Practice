function decodeToString(data, k, memo) {

    if (k === 0) {
        return 1;
    }

    let s = data.length - k;

    if (data[s] === "0") {
        return 0;
    }

    if (memo[k] !== null) {
        return memo[k];
    }

    let result = decodeToString(data, k - 1, memo);

    if (k >= 2 && parseInt(data.slice(s,s+2) ) <= 26) {
        result += decodeToString(data, k - 2, memo)
    }
    memo[k] = result
    return result;
}

function numWays(data){
    let memo = Array(data.length + 1).fill(null)
    return decodeToString(data, data.length, memo)
}
console.log(numWays("12"))
console.log(numWays("1234"))
console.log(numWays("27345"))