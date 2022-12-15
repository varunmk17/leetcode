// Timed out solution
const _subarraySum =  (nums, k) => {
    if(!nums || nums.length < 1) return 0;

    let l = nums.length;
    
    let sum = 0;
    let count = 0;

    for(let i = 0; i < l; i++) {
        sum = nums[i];
        if(sum === k) count++;

        for(let j = i+1; j < l; j++) {
            sum += nums[j];
            if(sum === k) count++;
        }
    }
    
    return count;
};

const subarraySum =  (nums, k) => {
    if(!nums || nums.length < 1) return 0;
    
    let map = {};
    let sum = 0;
    let result = 0;

    map[0] = 1;

    for(let i of nums) {
        sum += i;
        const diff = sum - k;

        result += map[diff] ? map[diff] : 0;
        map[sum] = map[sum] ? map[sum] + 1 : 1;
    }

    return result;
};


// let nums = [1,1,1], k = 2
// Output: 2


// let nums = [1,2,3], k = 3
// Output: 2

// let nums = [1,-1,1,1,1,1], k = 3
// Output: 2


let nums = [1], k = 0
// Output: 2


const res = subarraySum(nums, k);
console.log(res);