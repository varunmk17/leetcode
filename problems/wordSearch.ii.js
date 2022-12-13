import PrefixTree from "./trie.js";

const findWords = (board, words) => {
    const prefixTree = new PrefixTree();

    for(let word of words) prefixTree.addWord(word);

    const rows = board.length;
    const cols = board[0].length;

    const result = new Set();
    const visit = new Set();

    const dfs = (row, col, node, word) => {
        const position = [row,col];

        if(row < 0 || col < 0 || row >= rows || col >= cols || visit.has(position) || !node.children[board[row][col]]) {
            return;
        }
        
        visit.add(position);

        node = node.children[board[row][col]]
        word += board[row][col];

        if (node.isWord) {
            result.add(word);
        }

        dfs(row+1, col, node, word)
        dfs(row-1, col, node, word)
        dfs(row, col+1, node, word)
        dfs(row, col-1, node, word)

        visit.delete(position);
    }

    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            dfs(r, c, prefixTree.root, "")
        }
    }

    return [...result];
}


let board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]

// let board = [["a","a"]], words = ["aaa"]
// Output: []

const res = findWords(board, words);

console.log(res)
