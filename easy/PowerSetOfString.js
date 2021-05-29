function variations(str) {
    let results = []
    function walk(temp,rest) {
        results.push(temp.toString().split(',').join(''));
        for (let i = 0; i < rest.length; i++) {
            walk(temp.concat(rest.charAt(i)), rest.substring(i+1))
        }
    }
    walk([],str);
    return results;
}

console.log(variations("abc"))