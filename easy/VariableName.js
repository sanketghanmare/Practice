function variableName(name) {

    return /^[a-zA-Z]+[a-zA-Z0-9_]*$/.test(name)
}

console.log(variableName("aa_2"))
console.log(variableName(" aa_2"))
console.log(variableName("aa_2 "))
console.log(variableName("2w2"))