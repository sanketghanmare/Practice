function minStepsToOne(num) {
    if (num === 1) return 0;
    // let step = 0;
    // while(num % 2 !== 0 || num % 3 !== 0) {
    //     if (num === 1) {
    //         return step;
    //     }
    //
    //     if (num % 3 === 0) {
    //         num = num / 3;
    //         step += 1;
    //     } else if ( (num-1) % 3 !== 0 && num % 2 === 0) {
    //         num = num / 2;
    //         step += 1;
    //
    //     } else {
    //         num = num - 1;
    //         step += 1;
    //     }
    // }
    //
    // return step;
    return helper(num)
}

function helper(num, memo = {}) {

    if (num in memo) {
        return memo[num]
    }

    let step = 0;
    if(num % 2 !== 0 || num % 3 !== 0) {

        if (num % 3 === 0) {
            num = num / 3;
            step += 1;
            memo[num] = step
            helper(num, memo)
        } else if ( (num-1) % 3 !== 0 && num % 2 === 0) {
            num = num / 2;
            step += 1;
            memo[num] = step
            helper(num, memo)

        } else {
            num = num - 1;
            step += 1;
            memo[num] = step
            helper(num, memo)

        }
    }
    if (num === 1) {
        return memo[num]
    } else {
        helper(num, memo)
    }
}

console.log(minStepsToOne(5))
console.log(minStepsToOne(10))
console.log(minStepsToOne(4))
console.log(minStepsToOne(1))