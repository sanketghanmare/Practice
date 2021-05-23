function linearSearch(list, target) {

    // Returns the target index value if present in the list
    for(let i = 0; i < list.length; i++) {
        if(list[i] === target) return i
    }

    return null

}

console.log(linearSearch([2,3,412,45,6,34,6,34,3,677,9,674,0],0))