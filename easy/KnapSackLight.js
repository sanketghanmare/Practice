function knapSackLight(value1, weight1, value2, weight2, maxW) {
    let returnValue = 0;

    if (weight1 <= maxW) {
        if (value1 > value2) {
            returnValue += value1;
            maxW -= weight1;
            weight1 = 0;
            value1 = 0;
        } else if (weight2 > maxW) {
            returnValue += value1;
            maxW -= weight1;
            weight1 = 0;
            value1 = 0;
        }

    }

    if (weight2 <= maxW) {

        if (value2 > value1) {
            returnValue += value2;
            maxW -= weight2;
            weight2 = 0;
        } else if (weight1 !== 0) {
            returnValue += value2;
            maxW -= weight2;
            weight2 = 0;
        }


    }

    return returnValue;

}

console.log(knapSackLight(10,5,6,4,8))
console.log(knapSackLight(10,5,6,4,9))
console.log(knapSackLight(5,3,7,4,6))
 console.log(knapSackLight(15,2,20,3,2))