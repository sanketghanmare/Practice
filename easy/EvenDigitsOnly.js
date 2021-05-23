function evenDigitsOnly(n) {
    let bool = true
        let str = n.toString().split('')
    str.forEach(function (elemet) {
        if (parseInt(elemet) % 2 !== 0) {
            bool = false
        }
    })
    return bool
}

console.log(evenDigitsOnly(6564))
console.log(evenDigitsOnly(6664))