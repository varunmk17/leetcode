const findConnections = (graph, find) => {
    const friendsMap = new Map();

    for(let edge of graph) {
        const [friend1, friend2] = edge;

        friendsMap[friend1] = friendsMap[friend1] || [];
        friendsMap[friend1].push(friend2)

        friendsMap[friend2] = friendsMap[friend2] || [];
        friendsMap[friend2].push(friend1)
    }

    const [person1, person2 ] = find;

    let visited = new Set();

    const dfs = (person) => {
        if(visited.has(person)) return false;

        if(person == person2) return true;

        visited.add(person);

        for(let friend of friendsMap[person]) {
            if(dfs(friend)) return true;
        }
    }

   return dfs(person1) ? true : false;
}

let graph = [["a", "b"], ["b", "c"], ["d", "e"], ["a", "d"], ["g", "h"]], find = ["a", "d"];
const res = findConnections(graph, find);
console.log(res)