function recursiveBinarySearch(list, target) {

    if(list.length === 0){
        return false
    } else {
       let midPoint = Math.floor(list.length/2)
        if(list[midPoint] === target) {
            return true
        } else {
            if (list[midPoint] < target) {
                let lis = list.slice(midPoint+1, list.length)
                return recursiveBinarySearch(lis,target)
            } else {
                let les = list.slice(0, midPoint)
                return recursiveBinarySearch(les,target)
            }
        }
    }
}

console.log(recursiveBinarySearch([1,4,2,5,7,88], 88))
