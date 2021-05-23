function shapeArea(n) {

    if(n === 1) return 1;

    return shapeArea(n-1)  + n + 1
}
console.log(shapeArea(2))