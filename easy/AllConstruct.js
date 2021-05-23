function allConstruct(target, wordbank) {

    if (target === '') {
        return [[]];
    }
    const result = [];
    for (let word of wordbank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const allWays = allConstruct(suffix, wordbank);
            const targetWays = allWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }

    }
    return result
}

console.log(allConstruct('purple',['purp','p','ur','le','purpl']))
console.log(allConstruct('aaaaaz',['a','aa','aaa','aaaa']))