function electionWinners(votes, k) {

    let totalWinners = 0;

    let arr = votes.sort(function (a,b)  {
        return b-a;
    })
    if (k === 0 && arr[0] === arr[1]) return totalWinners;

    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            totalWinners += 1;
        } else {

                if (arr[i] + k > arr[0]) {
                    totalWinners += 1;
                }

        }
    }

    return totalWinners;

}

console.log(electionWinners([2, 3, 5, 2], 3))
console.log(electionWinners([1,1,1,1], 1))