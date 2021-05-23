// function reverseParanthesis(inputString) {
//     let stack = []
//     let newStr = ""
//     for (let i = 0; i < inputString.length;) {
//         if (inputString[i] === "(" || inputString[i] === ")") {
//             let j = i
//             while (inputString[j] !== ")") {
//                 stack.push(inputString[j])
//                 j++
//             }
//             if (inputString[j] === ")") {
//                 let s = ""
//                 let k = stack.length - 1
//                 while (stack[k] !== "(") {
//                     s += stack.pop()
//                     k--
//                 }
//                 stack.pop()
//                 for (let m = 0; m < s.length; m++) {
//                     stack.push(s[m])
//                 }
//
//
//             }
//             i = j + 1
//         } else {
//             if (stack.indexOf("(") === -1 && stack.length>0) {
//                 for (let k = 0; k < stack.length; k++) {
//                     newStr += stack[k]
//                 }
//                 stack = []
//             }
//             newStr += inputString[i]
//             i++;
//         }
//     }
//     if (stack.indexOf("(") === -1 && stack.length>0) {
//         for (let k = 0; k < stack.length; k++) {
//             newStr += stack[k]
//         }
//     }
//     return newStr
// }

function reverseParanthesis(s) {
    const arr = [...s];
    const stack = [];

    for (let i = 0; i < a.length; i++) {
        if (arr[i] === "(") {
            stack.push(i);
        }
        else if (a[i] === ")") {
            const j = stack.pop();
            arr.splice(j, i - j + 1, ...a.slice(j + 1, i).reverse());
            i -= 2;
        }
    }

    return arr.join("");
}

//console.log(reverseParanthesis("foo(bar)baz"));
// console.log(reverseParanthesis("foo(bar)baz(blim)"));
console.log(reverseParanthesis("foo(bar(baz))blim"));

