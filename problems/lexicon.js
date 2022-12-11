/*
There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. 
You receive a list of non-empty words from the dictionary, where words are sorted lexicographically by the rules of this new language. 
Derive the order of letters in this language.
*/

let words = ["wrt", "wrf", "er", "ett", "rftt"];
// let words = ["z","x"]
let len = words.length;

const lexicon = (words = []) => {
    let map = new Map();
    
    for(let idx = 0; idx < len - 1; idx++) {
        let word1 = words[idx]
        let word2 = words[idx+1]
        
        let i = 0, j = 0;
        while(i < word1.length && j < word2.length) {
            if(word1[i] !== word2[j]) {
                if(map.has(word1[i])) {
                    let existingChars = map.get(word1[i]);
                    existingChars.push(word2[j])
                    
                    map.set(word1[i], existingChars)
                } else {
                    map.set(word1[i], word2[j])
                }
                break;
            }
            i++;
            j++
        }
    }

    let res = [];
    while(map.size > 0) {
        let el = [...map.keys()].find(k => [...map.values()].indexOf(k) < 0);
        res.push(el)
        
        if(map.size === 1) {
            res.push(map.get(el))
        }
        map.delete(el)
    }
    
    return res;
}

const result = lexicon(words)
console.log(result)
