function featuredProduct(products) {
    // Write your code here
    products.sort();
    let productDict = {}
    let item = "";
    let max = 0;
    for(let i = 0; i < products.length; i++) {
        if(products[i] in productDict) {
            productDict[products[i]] += 1
        } else {
            productDict[products[i]] = 1
        }
    }

    for(let key in productDict) {
       if (max === 0) {
           max = productDict[key]
           item = key
       } else {
           if (max < productDict[key]) {
               max = productDict[key];
               item = key

           }
       }
    }
    return item;
}

console.log(featuredProduct(["red","grenn","yellow","red"]))