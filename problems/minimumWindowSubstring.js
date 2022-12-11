var minWindow = (s, t) => {
    if(s === t) return t;
    if(s.length < t.length) return "";
    
    let tMap = new Map();
    let wMap = new Map();
    let minString = s + "a";

    for(let i = 0; i < t.length; i++) {
        if(tMap.has(t[i])) {
            let tmp = tMap.get(t[i]);
            tMap.set(t[i], tmp + 1);
        } else {
            tMap.set(t[i], 1);
        }
    }

    const need = tMap.size;
    let have = wMap.size;

    let l = 0;
    let r = 0;

    while(r < s.length) {
        let rChar = s[r];

        if(wMap.has(rChar)) {
            let tmp = wMap.get(rChar);
            wMap.set(rChar, tmp + 1);
        } else {
            wMap.set(rChar, 1);
        }
      
        if(have < need && wMap.get(rChar) === tMap.get(rChar)) {
            have++;
        }
        
        
        while(have === need) {
            minString = minString.length > (r - l + 1) ? s.substring(l, r + 1) : minString; 
            // console.log(have, need, tMap, wMap, minString)
            
            let lChar = s[l];
            if(tMap.has(lChar)) {
                let lTmp = wMap.get(lChar);
                wMap.set(lChar, lTmp - 1);
                
                if(wMap.get(lChar) < tMap.get(lChar)) {
                    have--;
                }
            }
            
            l++;
        }

        r++;
    }
    
    return minString.length > s.length ? "": minString;
}

const s = "ADOBECODEBANC", t = "ABC" // Output: BANC
const res = minWindow(s, t)

console.log({res})