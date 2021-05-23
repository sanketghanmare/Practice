function PalindromeRearranging(inputString) {
    if (inputString.length < 1) return false
    if (inputString.length === 1) return true
    let dict = {}
    for (let i = 0; i < inputString.length; i++) {
        if(!dict[inputString[i]]) {
            dict[inputString[i]] = 1
        } else {
            dict[inputString[i]] += 1
        }
    }
    let uniq = 0
    for(let key in dict) {
       let val = dict[key]
       if (val % 2 !== 0) {
           uniq += 1
           if (uniq > 1) return false
       }
    }
    return uniq <= 1
}

console.log(PalindromeRearranging(""))
console.log(PalindromeRearranging("z"))
console.log(PalindromeRearranging("abcad"))
console.log(PalindromeRearranging("abcab"))
console.log(PalindromeRearranging("aabb"))
console.log(PalindromeRearranging("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa"))