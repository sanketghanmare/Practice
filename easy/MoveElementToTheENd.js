function Movelementtotheend(array, toMove) {
    let start = 0;
    let end = array.length - 1;

    for (let i = 0; i < array.length; i++) {

        if (array[i] === toMove) {
            // let item = array.splice(from, 1);

            array.push(array.splice(array.indexOf(toMove), 1)[0]);
        }
    }



    // while (end > start) {
    //
    //     if (array[start] === toMove && array[end] === toMove) {
    //         start++;
    //         end--;
    //     } else {
    //         let element = array[start];
    //         array[start] = array[end]
    //         array[end] = element
    //         start++;
    //         end--;
    //     }
    //
    // }

    // for (let i = 0; i < array.length; i++) {
    //
    //     }
    // }

    return array
}


console.log(Movelementtotheend([2, 1, 2, 2, 2, 3, 4, 2], 2));