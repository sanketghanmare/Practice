function addBorder(picture) {
    let boderLength = picture[0].length + 2
    let str = ""
    while(boderLength > 0) {
        str += "*"
        boderLength --;
    }
    let newArr = []
    newArr.push(str)
    for(let i = 0; i <picture.length; i++) {
        let newStr = "*"
        newStr += picture[i]
        newStr += "*"
        newArr.push(newStr)
    }
    newArr.push(str)
    return newArr
}

console.log(addBorder(["abc","ded"]))