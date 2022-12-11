// returns true
const data1 = [
    [1000, 3, 2],
    [550, 2, 4],
    [300, 2, 3],
    [800, 1, 4],
    [500, 2, 3]
];

// returns false
const data2 = [
    [1000, 3, 2],
    [450, 2, 4],
    [300, 2, 3],
    [800, 1, 4],
    [500, 2, 3]
];

let sum = 0;
const apr_arr = data1.reduce((acc, curr) => {
    const [P, n, apr] = curr;
    const amt = (apr/100)*n*P;
    
    sum += amt;
    acc.push(amt);
    
    return acc;
}, [])

const l = apr_arr.length;

const target = Math.floor(sum/2);

const dfs = (arr, idx, sum) => {
    if(sum === 0) return true;
    if(idx === 0 || sum < 0) return false;
    
    return dfs(arr, idx-1, sum-arr[idx-1]) || dfs(arr, idx-1, sum)
}

const res = dfs(apr_arr, l-1, target)
console.log(res)