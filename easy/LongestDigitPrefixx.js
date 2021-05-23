function longestDigitPrefix(inputString) {
   let long = "";
   for (let e of inputString) {
       if (parseInt(e) >= 0 && parseInt(e) <= 9) {
           long += e;
       } else break
   }
   return long
}

 console.log(longestDigitPrefix("123aaaa1"))
console.log(longestDigitPrefix("0123456789"))
console.log(longestDigitPrefix("the output is 42"))