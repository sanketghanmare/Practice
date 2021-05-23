function sortByHeight(a) {
    let newArr = []
    for(let i = 0; i < a.length; i++) {
        if(a[i] !== -1) newArr.push(a[i])
    }
    newArr.sort((a,b) => b-a)

    for(let i = 0; i < a.length; i++) {
        if(a[i] !== -1) {
            a[i] = newArr.pop()
        }
    }
    return a
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))