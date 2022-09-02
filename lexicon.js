let words = ["wrt", "wrf", "er", "ett", "rftt"];
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
    
    console.log(map)
    let res = [];
    
    while(map.size > 0) {
        let el = [...map.keys()].find(k => [...map.values()].indexOf(k) < 0);
        res.push(el)
        
        if(map.size === 1) {
            res.push(map.get(el))
        }
        map.delete(el)
    }
}

lexicon(words)
