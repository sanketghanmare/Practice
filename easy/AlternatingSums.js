    function alternatingSums(a) {
        let newArr = [0,0]
        for(let i = 0; i < a.length; i++) {
            if(i%2===0) {
                newArr[0] += a[i]
            } else {
                newArr[1] += a[i]

            }
        }

        return newArr
    }

    console.log(alternatingSums([50, 60, 60, 45, 70]))