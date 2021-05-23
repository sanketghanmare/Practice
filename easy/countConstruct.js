function CountConstruct(target, wordbank) {

    if(target === '') {
        return 1
    }

    let totalCount = 0;

    for (let word of wordbank) {
        if (target.indexOf(word) === 0) {
            const numOfWays = CountConstruct(target.slice(word.length), wordbank);
            totalCount += numOfWays;
        }
    }
    
    return totalCount;
}

console.log(CountConstruct("abcdef",["ab", "abc", "cd", "def", "abcd"]))
console.log(CountConstruct("skateboard",["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(CountConstruct("eeeeeeeeeeeeeef",["e", "ee", "eee", "eeee", "eeeee"]))