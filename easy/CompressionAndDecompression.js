function Decompressor(compressedString) {
    let numberStack = []
    let strStack = ""
    let brackStack = []
    let lastStr = ""

    let holder = []

    let numberStr = ""
    for (let i = 0; i < compressedString.length; i++) {
        if(compressedString[i].match("[0-9]") !== null) {
            numberStr += compressedString[i]
        }
         else if (compressedString[i] === "[") {
             if (numberStr.length >0) {
                 numberStack.push(parseInt(numberStr))
                 numberStr ="";
             }
            brackStack.push(compressedString[i])
        } else if (compressedString[i] === "]") {
            brackStack.pop()
            let repeater = numberStack.pop()
            let newStr = ""
            if (holder.length > 0) {
                let old = holder.pop()
                lastStr = old+lastStr
            }
            while (repeater > 0) {
                newStr += lastStr
                repeater --;
            }
            if (brackStack.length !== 0) {
                holder.push(newStr)
                lastStr = ""

            } else {
                strStack += newStr
                lastStr = ""
            }
            newStr = ""
        } else if(compressedString[i].match("[a-zA-z]+$")) {

                 lastStr += compressedString[i];

    }
}
    if(lastStr.length !== 0) strStack += lastStr;
    return strStack
}

console.log(Decompressor("10[a]"))
console.log(Decompressor("3[abc]4[ab]c"))
console.log(Decompressor("2[3[a]b]"))