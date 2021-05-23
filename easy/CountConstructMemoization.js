function CountConstructMemoization(target, wordbank, memo = {}) {

    if (target in memo) {
        return memo[target]
    }

    if (target === "") {
        return 1;
    }

    let totalCount = 0;

    for (let word of wordbank) {
        if (target.indexOf(word) === 0) {
            const numOfWays = CountConstructMemoization(target.slice(word.length), wordbank, memo);
            totalCount += numOfWays;
        }
    }
    memo[target] = totalCount;
    return totalCount;
}


console.log(CountConstructMemoization("abcdef",["ab", "abc", "cd", "def", "abcd"]))
console.log(CountConstructMemoization("skateboard",["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(CountConstructMemoization("eeeeeeeeeeeeeef",["e", "ee", "eee", "eeee", "eeeee"]))