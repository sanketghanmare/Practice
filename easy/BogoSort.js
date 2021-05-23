function isSorted(values) {
    for (let i = 0; i < values.length - 1; i++) {
        if (values[i] > values[i+1]) return false
    }
    return true
}

function bogoSort(values){
    let attempts = 0
    while(!isSorted(values)) {
        console.log(attempts)
        randomShuffle(values)
        attempts += 1
    }
    return values
}

function randomShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [array[i], array[j]] = [array[j], array[i]]
    }
}

console.log(bogoSort([1,5,3,2,7]))