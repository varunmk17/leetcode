const pacificAtlantic = (heights) => {
    const rows = heights.length;
    const cols = heights[0].length;

    let pac = Array(rows).fill().map(() => Array(cols).fill(false));
    let atl = Array(rows).fill().map(() => Array(cols).fill(false));

    const dfs = (r, c, visit, prevHeight) => {
        if(r < 0 || c < 0 || r >= rows || c >= cols || visit[r][c] || heights[r][c] < prevHeight) return;
        
        visit[r][c] = true;

        dfs(r-1, c, visit, heights[r][c])
        dfs(r+1, c, visit, heights[r][c])
        dfs(r, c-1, visit, heights[r][c])
        dfs(r, c+1, visit, heights[r][c])
    }

    for(let i = 0; i < cols; i++) {
        dfs(0, i, pac, heights[0][i])
        dfs(rows-1, i, atl, heights[rows-1][i])
    }


    for(let i = 0; i < rows; i++) {
        dfs(i, 0, pac, heights[i][0])
        dfs(i, cols-1, atl, heights[i][cols-1])
    }

    const res = [];

    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(pac[r][c] && atl[r][c]) res.push([r,c])
        }
    }

    return res;
};



let heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]];
// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

const res = pacificAtlantic(heights);
console.log(res)