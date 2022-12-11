const encode = (words = []) => {
    const encodedStr = words.reduce((acc, curr) => {
        const wordLen = curr.length;
        acc += `${wordLen}#${curr}`;
        
        return acc;
    }, "")
    
    return encodedStr;
}

const decode = (encodedStr = "") => {
    let words = [];
    let idx = 0;
    let len = encodedStr.length;
    
    while(idx < len) {
        let wordLen = parseInt(encodedStr[idx]);
        
        let word = encodedStr.slice(idx + 2, idx + 2 + wordLen);
        
        words.push(word)
        idx = idx + 2 + wordLen;
    }
    
    return words;
}

let words = ["leet","code","love","you"];

const encodedStr = encode(words);
console.log(encodedStr);

const decodedWords = decode(encodedStr);
console.log(decodedWords)