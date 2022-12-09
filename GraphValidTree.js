 const validTree = (n, edges) => {
     if(!n || n === 0) return true;
     
     let neighbors = Array(n).fill().map(x => []);
     let isVisited = new Set();
     
     for(let [node1, node2] of edges) {
         neighbors[node1].push(node2)
         neighbors[node2].push(node1)
     }
     
     const dfs = (node, prev) => {
        if(isVisited.has(node)) return false;
        
        isVisited.add(node);
        
        for(let neighbor of neighbors[node]) {
            if(neighbor === prev) continue;
            
            if(!dfs(neighbor, node)) return false;
        }
        
        return true;
     }
     
     return dfs(0, -1) && n === isVisited.size;
 }

// let n = 5, edges = [[0, 1], [0, 2], [0, 3], [1, 4]]
// console.log(validTree(n, edges))
// Output: true.

let n = 5, edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]
console.log(validTree(n, edges))
// Output: false.
