function allConstructMemo(target, wordbank, memo = {}) {
    if (target in memo) {
        return memo[target]
    }
    if(target === '') {
        return [[]]
    }

    let result = []

    for (let word of wordbank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const allWays = allConstructMemo(suffix, wordbank, memo);
            const targetWays = allWays.map(way => [word, ...way])
            result.push(...targetWays)
        }
    }
    memo[target] = result
    return result;
}

console.log(allConstructMemo('purple',['purp','p','ur','le','purpl']))
console.log(allConstructMemo('aaaaaz',['a','aa','aaa','aaaa']))