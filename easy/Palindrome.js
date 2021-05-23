function checkPalindrome(inputString) {
   //  if(inputString.length === 1 ) {
   //      return true
   //  } else if(inputString.length === 2) {
   //      return inputString[0] === inputString[1]
   //  }
   // let i = 0;
   // let j = inputString.length - 1;
   // while (i <= inputString.length/2 && j >= inputString.length/2) {
   //     if (inputString[i] !== inputString[j]) {
   //         return false
   //     } else {
   //         i++;
   //         j--
   //
   //     }
   // }
   //  return true
    return inputString === inputString.split('').reverse().join('')
}


console.log(checkPalindrome("hlbeeykoqqqqokyeeblh"))
console.log(checkPalindrome("aaabaaaa"))
console.log(checkPalindrome("aabaa"))
console.log(checkPalindrome("az"))
console.log(checkPalindrome("nan"))