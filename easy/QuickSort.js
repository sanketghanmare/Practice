function QuickSort(values) {
    if (values.length <= 1) return values
    let lessThanPivot = []
    let greaterThanPivot = []

    let pivot = values[0]
    for (let i = 1; i < values.length; i++) {
        if (values[i] <= pivot) {
            lessThanPivot.push(values[i])
        } else {
            greaterThanPivot.push(values[i])
        }
    }
    return QuickSort(lessThanPivot) + [pivot] + QuickSort(greaterThanPivot)
}

console.log(QuickSort([1,4,5,2,6,8]))