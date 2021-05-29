function PowerSetOfNums(nums) {

    const results = [];

    function walk(temp, rest) {
        results.push(temp);
        for (let i = 0;i < rest.length; i++) {
            walk(temp.concat(rest[i]), rest.slice(i+1));
        }
    }

    walk([], nums);
    return results;
}

console.log(PowerSetOfNums([1,2,3]))