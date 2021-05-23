function reverseVowels(str) {

    let stack = [];
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' ||str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ||
            str[i] === 'A' || str[i] === 'E' ||str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
            stack.push(str[i]);
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' ||str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ||
            str[i] === 'A' || str[i] === 'E' ||str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
            newStr += stack.pop();
        } else {
            newStr += str[i];
        }
    }
return newStr;
}

console.log(reverseVowels("san francisco"))