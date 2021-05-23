function allConstructTabulation(target, wordBank) {
    const table = Array(target.length + 1)
        .fill()
        .map(() => []);

    table[0] = [[]];

    for (let i =0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i+word.length) === word) {
                const newCombination = table[i].map(subarray => [...subarray, word]);
                table[i+word.length].push(...newCombination)
            }
        }
    }

    return table[target.length];
}

console.log(allConstructTabulation('purple',['purp','p','ur','le','purpl']))
// console.log(allConstructTabulation('aaaaaaaaaaaaaaaaa',['a','aa','aaa','aaaa']))