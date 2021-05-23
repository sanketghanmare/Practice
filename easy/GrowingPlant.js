function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let height = 0;
    let day = true;
    let count = 0;

    while (height < desiredHeight) {
        if (day) {
            count += 1;
            height += upSpeed;
            day = false;
        } else {
            count += 1;
            day = true;
            height -= downSpeed;
        }
    }
    return Math.ceil(count/2);
}

console.log(growingPlant(100,10,910));
console.log(growingPlant(10,9,4));
console.log(growingPlant(5,2,7));
console.log(growingPlant(7,3,443));
console.log(growingPlant(6,5,10));