function minStepsToOne(n) {
    function traverse(current) {
        if (current === 1) {
            return 0;
        }

        // subtract 1
        let option = traverse( current - 1);


        // divide by 3
        if (current % 3 === 0) {
            let divide3 = traverse((current)/3);
            option = Math.min(option, divide3)
        }

        // divide by 2
        if (current % 2 === 0) {
            let divide2 = traverse((current)/2);
            option = Math.min(option, divide2)
        }

        return option + 1;
    }

    return traverse(n)
}

console.log(minStepsToOne(30))
console.log(minStepsToOne(10000))