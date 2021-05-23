function circleOfNumbers(n, firstNumber) {

    let adder = n/2;
    if(adder+firstNumber > n - 1) {
        return adder+firstNumber - n
    }

    return adder+firstNumber

}

console.log(circleOfNumbers(18,9))
console.log(circleOfNumbers(18,5))
console.log(circleOfNumbers(10,7))
console.log(circleOfNumbers(12,10))