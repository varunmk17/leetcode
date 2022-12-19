const combinationSumTwo = (candidates, target) => {
    candidates.sort();
    let result = [];

    const dfs = (cur, i, sum) => {
        if(sum === target) return result.push(cur.slice());

        if(i >= candidates.length || sum > target) return;

        let prev = -1;

        for(let j = i; j < candidates.length; j++) {
            if(candidates[j] == prev) continue;
            
            cur.push(candidates[j]);
            dfs(cur, j+1, sum + candidates[j]);
            cur.pop();
            prev = candidates[j];
        }
    }

    dfs([], 0, 0);

    return result;
}


let  candidates = [10,1,2,7,6,1,5], target = 8
// Output: [[1,1,6],[1,2,5],[1,7],[2,6]]

// let candidates = [2,5,2,1,2], target = 5
// Output: [[1,2,2],[5]]

const res = combinationSumTwo(candidates, target);
console.log(res);

export default combinationSumTwo;