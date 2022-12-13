class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}

class PrefixTree {
    constructor(){
        this.root = new TrieNode()
    }

    addWord(word, node = this.root) {
        for(let letter of word) {
            let child = node.children[letter] || new TrieNode();
            node.children[letter] = child;

            node = child;
        }

        node.isWord = true;
    }
}

export default PrefixTree;

// const tree = new PrefixTree();
// tree.addWord("hello");
// tree.addWord("hero");
// tree.addWord("world");

// console.log(JSON.stringify(tree.root));
