function areSimilar(arr, brr) {
    let counter = 0

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== brr[i]) {
            counter ++;

        }

    }
    arr.sort((a,b) => a-b)
    brr.sort((a,b) => a-b)
        if (JSON.stringify(arr) === JSON.stringify(brr)) {

            return counter <= 2;

        } else {
           return false
        }
}

console.log(areSimilar([1, 2, 3],[2, 1, 3]))
console.log(areSimilar([1, 2, 3],[2, 1, 4]))
console.log(areSimilar([1, 2, 1],[2, 1, 3]))
console.log(areSimilar([832, 998, 148, 570, 533, 561, 894, 147, 455, 279], [832, 998, 148, 570, 533, 561, 455, 147, 894, 279]))
console.log(areSimilar([832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
                       [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]))