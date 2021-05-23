function powerSet(inputStr) {
    let list = [];
    list.push(inputStr)
    list.push(...inputStr)
    for (let i = 0; i < inputStr.length-1; i++) {
       for (let j = i+1; j < inputStr.length; j ++) {
           let str = inputStr[i] + inputStr[j];
           list.push(str)
       }
    }
    return list;
}


console.log(powerSet("abc"))