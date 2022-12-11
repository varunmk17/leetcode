import program from "./program.js";

import insert from "./problems/insertInterval.js";

let  intervals = [[1,3],[6,9]], newInterval = [2,5]

// let  intervals = [[1,5]], newInterval = [2,3]

// Output: [[1,5],[6,9]]

const result = program.run(insert, intervals, newInterval)

console.log(result)