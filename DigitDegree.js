

function digitDegree(n) {
    if(n < 10) {
        return 0;
    } else {
        let i;
        for (i = 0; n >= 10; i++ ) {
            let sum = 0;
            let temp = n.toString();
            for (let j = 0; j < temp.length; j++ ) {
                sum += parseInt(temp.charAt(j))
            }
                n = sum;
        }
        return i;
    }
}

 console.log(digitDegree(100))
console.log(digitDegree(877))
console.log(digitDegree(91))
console.log(digitDegree(5))
console.log(digitDegree(111))
console.log(digitDegree(99))
console.log(digitDegree(101010))