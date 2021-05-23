function anagramPalindrome(str) {
    let dict = {};

    for (let i = 0; i < str.length; i++) {
        if (str[i] in dict) {
            dict[str[i]] += 1
        } else {
            dict[str[i]] = 1
        }
    }
    let count = 0;
    for (let key in dict) {
        if (dict[key] % 2 !== 0) {

            count += 1
            if (count > 1) {
                return 0;
            }
        }
    }
    return 1;
}

console.log(anagramPalindrome("outco"))
console.log(anagramPalindrome("carrace"))