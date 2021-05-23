function headDestroyer(N, arr) {

    let output = 0;
    let i = 0;
    let behaded = false;
    while(arr.length > 0) {
        if(arr[i] === N) {
            N--;
            arr.splice(i,1)
            behaded = true
        } else {
            i++;
            if (behaded) {
                output++;
                behaded = false
                i = 0
            }
        }
    }
    if (behaded) {
        output++;
    }
    return output
}

console.log(headDestroyer(5, [2,1,5,4,3]))