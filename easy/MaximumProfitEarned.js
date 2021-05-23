function maxProfitEarned(arr) {
    let buyPrice = 0;
    let sellingPrice = 0;
    for(let i = 0; i < arr.length - 1; i++) {
        if(buyPrice === 0) {
            buyPrice = arr[i]
        } else {
            if (arr[i] < buyPrice) {
                buyPrice = arr[i]
                for (let j = i+1; j < arr.length; j++) {
                    if (sellingPrice === 0) {
                        if(arr[j] > buyPrice) {
                            sellingPrice = arr[j] - buyPrice
                        }
                    } else {
                        if(arr[j] > buyPrice && (sellingPrice < arr[j] - buyPrice) )  {
                            sellingPrice = arr[j] - buyPrice
                        }
                    }
                }
            }
        }
    }

    return sellingPrice
}

console.log(maxProfitEarned([10,7,5,11,12,4]))
console.log(maxProfitEarned([10,7,5,11,4]))