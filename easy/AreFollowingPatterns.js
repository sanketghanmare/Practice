function areFollowingPatterns(strings, patterns) {
    // for(let i = 0; i < strings.length; i++) {
    //     let j = i;
    //     if(strings[i+1] === strings[i]) {
    //         if(patterns[j+1] !== patterns[j]) {
    //             return false
    //         }
    //     } else if (strings[i+1] !== strings[i] && patterns[j+1] === patterns[j]) {
    //         return false
    //     }
    // }
    // return true
    let hash = {}
    for(let i = 0; i < strings.length; i++) {
        let j = i;
        if(!hash[strings[i]]) {
            if (Object.values(hash).indexOf(patterns[i]) > -1) {
                return false
            }
            hash[strings[i]] = patterns[i]
        } else if(hash[strings[i]] !== patterns[i]) {
            return false
        }
    }
    return true
}


// console.log(areFollowingPatterns(["cat", "dog", "dog"],["a", "b", "b"]))
console.log(areFollowingPatterns(["cat", "dog", "doggy"],["a", "b", "b"]))