function beautifulString(str) {
    let sorted = str.split('').sort().join('')
    let arr = {};
    for (let c = 97; c <= 122; c++) {
        let char = String.fromCharCode(c)
        arr[char] = 0
    }
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[0] !== 'a') return false;
        if (sorted[i] in arr) {
            arr[sorted[i]] += 1
        }  else {
            arr[sorted[i]] = 1
        }
    }
    let co = []
    for (let key in arr) {
        if (co.length === 0) {
            co.push(arr[key])
        } else {
            if (co[co.length - 1] > arr[key] || co[co.length - 1] === arr[key]) {
                co.push(arr[key])
            } else {
                return false;
            }
        }
    }
    return true;
}

console.log(beautifulString("bbc"))
console.log(beautifulString("aabbb"))
console.log(beautifulString("beautifull"))
console.log(beautifulString("abcdefghijklmnopqrstuvwxyzz"))
console.log(beautifulString("abcdefghijklmnopqrstuvwxyz"))
 console.log(beautifulString("abcdefghijklmnopqrstuvwxyzqwertuiopasdfghjklxcvbnm"))