function lineEncoding(s) {
    let newStr = "";
    for(let i = 0; i <= s.length - 1;) {
        let count = 1;
        for (let j = i+1; j <= s.length; j++) {
            if (s[j] === s[i]) {
                count += 1;
            } else {
                if (s[j] !== s[i] && count === 1) {
                    newStr += s[i];
                    i = j;
                    break;
                } else {
                    newStr +=  count + s[i];
                    i = j;
                    break;
                }
            }
        }
    }

    return newStr;

}

console.log(lineEncoding("aabbbc"))
console.log(lineEncoding("ssiiggkooo"))
console.log(lineEncoding("adfaaa"))