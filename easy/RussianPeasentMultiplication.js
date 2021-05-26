function RussianPeasentMultiplication(a,b) {
    let halfs = [a];
    let doubles = [b];

    while (halfs[halfs.length - 1] !== 1) {
        let num = halfs[halfs.length - 1]/2;
        halfs.push(~~num);
        doubles.push(doubles[doubles.length-1]*2);
    }
    let sum = 0;
    for (let i = 0; i < halfs.length; i++) {
        if (halfs[i]%2 !== 0) {
            sum += doubles[i];
        }
    }
    return sum;
}

// console.log(RussianPeasentMultiplication(24,16))
console.log(RussianPeasentMultiplication(487,734))
// console.log(RussianPeasentMultiplication(846,908))