function avoidObstacles(inputArray) {

    const max = Math.max(...inputArray);
    for (let i = 1; i< max; i++) {
        const divs = inputArray.some(x => x % i === 0);
        if(!divs) return i;
    }
    return max +1;
}

console.log(avoidObstacles([5, 3, 6, 7, 9]))
console.log(avoidObstacles([2,3]))