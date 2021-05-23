function canConstructMemoization(target, wordbank, memo = {}) {

    if (target in memo) {
        return memo[target]
    }

    if (target === "") {
        return true
    }

    for (let word of wordbank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstructMemoization(suffix, wordbank, memo) === true){
                memo[target] = true;
                return true
            }
        }
    }
    memo[target] = false;
    return false;


}

console.log(canConstructMemoization("abcdef",["ab", "abc", "cd", "def", "abcd"]))
console.log(canConstructMemoization("skateboard",["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(canConstructMemoization("eeeeeeeeeeeeeef",["e", "ee", "eee", "eeee", "eeeee"]))