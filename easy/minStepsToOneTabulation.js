function minStepsToOneTabulation(n) {
    let table = new Array(n + 1)

    if (table[n] !== undefined) {
        return table[n];
    }

    table[1] = 0;

    for (let i = 2; i < table.length; i++) {
        let option = table[i-1];

        if (i%3 === 0) {
            let divide3 = table[i/3];
            option = Math.min(option, divide3)
        }
        if (i%2 === 0) {
            let divide2 = table[i/2];
            option = Math.min(option, divide2)
        }

        table[i] = option + 1;
    }

    return table[n];
}

console.log(minStepsToOneTabulation(5))