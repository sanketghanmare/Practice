function numWays(N, set) {
    if (N === 0) {
        return 1;
    }

    let nums = Array(N + 1).fill(0);
    nums[0] = 1;
    for (let i = 1; i <= N; i++) {
        let total = 0;
        for (let val of set) {
            if (i - val >= 0) {
                total += nums[i - val];
            }

        }
        nums[i] = total;
    }

    return nums[N];
}

console.log(numWays(10, [1, 2, 3]));