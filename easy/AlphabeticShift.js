    function alphabeticShift(inputString) {
        let arr = inputString.split("")
        let newStr = ""
        for(let i =0; i < arr.length; i++) {
            let code = arr[i].charCodeAt(arr[i])
            if (code === 122) {
                code = 96
            }
            newStr += String.fromCharCode(code+1)

        }
        return newStr

    }

    console.log(alphabeticShift("crazy"))
    console.log(alphabeticShift("zzzzzzzz"))
    console.log(alphabeticShift("asddsa"))
    console.log(alphabeticShift("zzzxcvdafsgergszzzzz"))
    console.log(alphabeticShift("qertrgsdgsdfgw"))
    console.log(alphabeticShift("thjnhjloiuytrazxhn"))