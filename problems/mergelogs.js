const mergeLogs = (logs1 = [], logs2 = []) => {
    let combinedLogs = [...logs1, ...logs2];
    
    let map = combinedLogs.reduce((acc, curr) => {
        let [version, ...rest] = curr.split(' ');
        
        if(acc[version]) {
            let val = rest.slice(1).join(' ');
            acc[version].push(val)
        } else {
            let val = [`-----`].concat(rest.slice(1)).join(' ');
            acc[version] = [];
            acc[version].push(val);
        }

        return acc;
    }, {});
    
    const sortedVersions = Object.keys(map).sort(sortFn).reverse();
    
    const res = sortedVersions.reduce((acc, curr) => {
        acc.push(`${curr} ${map[curr].join(', ')}`)
        
        return acc;
    }, [])
    
    return res;
}

const sortFn = (version1, version2) => {
    if(version1 === version2) return 0;
    let arr1 = version1.split('.');
    let arr2 = version2.split('.');
    let l = Math.max(arr1.length, arr2.length);
    
    for(let i = 0; i < l; i++) {
        let v1 = parseInt(arr1[i]);
        let v2 = parseInt(arr2[i]);
        
        if(v1 < v2) return -1;
        if(v1 > v2) return 1;
    }
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
