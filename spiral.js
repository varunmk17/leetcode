const spiral = (n) => {
    let res = Array(n).fill().map(x => Array(n).fill(0));
    
    let l = Math.floor(n/2), r = Math.floor(n/2);
    res[l][r] = 1;
    
    return res;
}

const n = 7;
const res = spiral(n);
console.log(res)


# 7x7:
# .  .  .  .  .  .  .
# .  .  .  .  .  .  .
# .  .  5  6  7  .  .
# .  .  4  1  8  .  .
# .  .  3  2  9  .  .
# .  .  . <- 10  .  .
# .  .  .  .  .  .  49
