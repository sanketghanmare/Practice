function fibonacciTabular(n) {
    const table = Array(n+1).fill(0);
    table[1] = 1;

    for (let i = 0; i <= n; i++) {
        table[i+1] += table[i];
        table[i+2] += table[i];
    }

    return table[n]
}

console.log(fibonacciTabular(6))
console.log(fibonacciTabular(16))
console.log(fibonacciTabular(2))
console.log(fibonacciTabular(1234))