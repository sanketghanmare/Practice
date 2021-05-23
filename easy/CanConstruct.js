function canConstruct(target, wordbank) {

    if (target === '') {
        return true;
    }

    for (let word of wordbank) {
        if (target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordbank) === true) {
                return true;
            }
        }
    }

    return false;
}

console.log(canConstruct("abcdef",["ab", "abc", "cd", "def", "abcd"]))
console.log(canConstruct("skateboard",["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(canConstruct("eeeeeeeeeeeeeef",["e", "ee", "eee", "eeee", "eeeee"]))