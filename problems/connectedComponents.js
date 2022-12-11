const countComponents = (n, edges) => {
    let parents = [...Array(n).keys()];
    let count = n;
    
    const getParent = (i) => {
        while(parents[i] != i) {
            parents[i] = parents[parents[i]];
            i = parents[i]
        }
        
        return i;
    }

    for(let i = 0; i < edges.length; i++) {
        let node1 = getParent(edges[i][1]);
        let node2 = getParent(edges[i][0]);
        
        if(node1 != node2) {
            parents[node1] = node2;
            count--;
        }
    }
    
    return count;
}

let n = 5, edges = [[0, 1], [1, 2], [3, 4]] // output: 2
// let n = 5, edges = [[0, 1], [1, 2], [2, 3], [3, 4]] // output: 1
const res = countComponents(n, edges)
console.log(res)