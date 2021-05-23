function MinimumIndex(values) {
    let minIndex = 0
    for (let i = 0; i < values.length; i++) {
        if (values[i] < values[minIndex]) {
            minIndex = i
        }
    }
    return minIndex;
}

function SelectionSort(values) {
    let sortedList = []
    while(values.length > 0) {
        let indexToMove = MinimumIndex(values);
        sortedList.push(values.splice(indexToMove,1)[0])
    }
    return sortedList
}

console.log(SelectionSort([1,4,3,7,6,9,2,0]))