function recurringChar(a) {

    let dictionary = {}

    for (let i = 0; i < a.length; i++) {
        if (!dictionary[a[i]]) {
            dictionary[a[i]] = 1;
        } else {
            dictionary = {}
            return a[i];
        }
    }

    return "No repeating Char in a string";
}

console.log(recurringChar("ABCA"))
console.log(recurringChar("BCABA"))
console.log(recurringChar("ABC"))