function fibbonacci(number) {
    if(number <= 2) {
        return 1
    }

    return fibbonacci(number - 1) + fibbonacci(number - 2)
}

console.log(fibbonacci(40))