function isMAC48Address(inputstring) {
    let regex = /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/;
    return regex.test(inputstring);
}

console.log(isMAC48Address("01-23-45-67-89-AB"))
console.log(isMAC48Address("01-23-45-67-89-AZ"))