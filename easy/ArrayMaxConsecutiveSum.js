function arrayMaxConsecutiveSum(inputArray, k) {
    let win = initialSum(inputArray, k);
    let max = win;

    for (let i = 1; i <= inputArray.length - k; i++) {
        win = win - inputArray[i - 1] + inputArray[i + k - 1]
        max = Math.max(max, win);
    }

    return max;

}

function initialSum(inputArray, k) {

    let sum = 0;

    for (let i = 0; i < k; i++) {
        sum += inputArray[i]
    }

    return sum;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2))