function isIPv4Address(inputString) {
    if (inputString.match("[a-zA-Z]+$") !== null) {
        return false
    }
    let arr = inputString.split('.')
    if(arr.length < 4) return false;

    for (let i = 0; i < arr.length; i++) {

        if (parseInt(arr[i]) >= 0 && parseInt(arr[i]) <= 255) {
            if (arr[i].length > 1 && parseInt(arr[i].charAt(0)) === 0) {
                return false
            }
        } else {
            return false
        }
    }
    return true
}

// console.log(parseInt('1'))

// console.log(isIPv4Address("172.16.254.1"))
console.log(isIPv4Address("64.233.161.00"))
// console.log(isIPv4Address("172.316.254.1"))
// console.log(isIPv4Address("1.1.1.1a"))