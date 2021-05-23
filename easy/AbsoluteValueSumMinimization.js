function absoluteValueSumMinimization(a) {
    let lowest = null;
    let ele = null;
    a.forEach(function (element) {
        let sum = 0;
       for(let i = 0; i < a.length; i++) {
           sum += Math.abs(a[i]-element)
       }
       if (lowest === null) {
           lowest = sum
           ele = element
       } else if(lowest > sum) {
           lowest = sum
           ele = element

       }
    })
    return ele
}

console.log(absoluteValueSumMinimization([2, 4, 7]))