const mergeLogs = (logs1 = [], logs2 = []) => {
    let res = [];
    let combinedLogs = [...logs1, ...logs2];
    
    
    return res;
}

let logs1 = [
    '10.9.0 ----- #comment 1',
    '5.1.0 ----- #comment 2',
    '5.3.4 ----- #comment 3',
    '1.1.0 ----- #comment 4'
];

let logs2 = [
    '10.9.2 ----- #comment 5',
    '5.1.0 ----- #comment 6',
    '6.3.9 ----- #comment 7',
    '1.0.0 ----- #comment 8'
];

const res = mergeLogs(logs1, logs2);
console.log(res)
