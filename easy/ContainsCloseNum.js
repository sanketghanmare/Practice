function containsCloseNums(nums, k) {
    let hash = {}
    // if(nums.length <= 1) {
    //     return false
    // }
    // for(let i = 0; i < nums.length; i++) {
    //     if(!hash[nums[i]]){
    //         hash[nums[i]]=[]
    //         hash[nums[i]].push(i)
    //     }else{
    //         hash[nums[i]].push(i)
    //     }
    // }
    // for (let item in hash) {
    //     if (hash[item].length > 1) {
    //         let arr = hash[item]
    //         for (let i = 0; i < arr.length - 1; i++) {
    //             for(let j = i + 1; j < arr.length; j++) {
    //                 let diff = Math.abs(arr[i] - arr[j])
    //                 if(diff <= k) {
    //                     return true
    //                 }
    //             }
    //         }
    //     }
    //
    // }

    for (let i = 0; i < nums.length; i++) {
        if(i - hash[nums[i]] <= k) {
            return true
        }
        hash[nums[i]] = i
    }
    return false
}

 console.log(containsCloseNums(nums = [0, 1, 2, 3, 5, 2], k = 3))
console.log(containsCloseNums(nums = [1,2,1], k = 2))
console.log(containsCloseNums(nums = [1,0,1,1], k = 1))