function buildPalindrome(st) {
    if (st === st.split('').reverse().join('')) {
        return st;
    }

    let i = 0;
    let str;
    while(st !== st.split('').reverse().join('')){
        str = st.split('')
        str.splice(st.length-i, 0 ,st[i])
        st = str.join('');
        i++;
    }
    return st;
}

console.log(buildPalindrome("aa"))
console.log(buildPalindrome("aab"))