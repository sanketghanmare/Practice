function isValidSubsequence(array, sequence) {
    let j = 0;
    for(let i = 0; i < array.length; i++) {
        let element = array[i];
            if(sequence[j] === element) {
                sequence.shift();
            }


    }
    return sequence.length === 0;

}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));