function factorial(n) {
    if (n === 1) {
        return 1;
    }

    n *= factorial(n-1);

    return n;
}

console.log(factorial(4))