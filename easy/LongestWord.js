function longestWord(text) {
    let words = text.match(/\w+/g);

    let ml = Math.max(...words.map(el=>el.length))

    for(let i=0;i< words.length; i++){
        if(words[i].length === ml)
            return words[i]
    }
}

console.log(longestWord("Ready, steady, go!"))