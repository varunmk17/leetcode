const partition = (s) => {
    const result = [];
    const partitions = [];

    const isPalindrome = (s, l, r) => {
        while(l < r) {
            if(s[l] != s[r]) return false;

            l++;
            r--;
        }

        return true;
    }

    const dfs = (i) => {
        if(i >= s.length) return result.push(partitions.slice());

        for(let j = i; j < s.length; j++) {
            if(isPalindrome(s, i, j)) {
                partitions.push(s.substring(i, j+1));
                dfs(j+1);
                partitions.pop();
            }
        }
    }

    dfs(0);

    return result;
}


let s = "aab"
// Output: [["a","a","b"],["aa","b"]]

// let s = "a"
// Output: [["a"]]

const res = partition(s);
console.log(res);

export default partition;