class Graph {
    // Implementasi graph dan metode DFS
    constructor(grid){
        this.grid = grid;
        this.rows = grid.length;
        this.cols = grid[0].length;
    }

    dfs(i, j){
        if(i < 0 || j < 0 || i >= this.rows || j >=this.cols|| this.grid[i][j] == 0) return;
        this.grid[i][j] = 0;

        this.dfs(i - 1, j);
        this.dfs(i + 1, j);
        this.dfs(i, j - 1);
        this.dfs(i, j + 1);
    }
}

function islandCount(grid) {
    // Implementasi DFS untuk menghitung jumlah pulau
    if(!grid || grid.length == 0) return 0;
    const graph = new Graph(grid);
    let count = 0;

    for(let i = 0; i < graph.rows; i++){
        for(let j = 0; j < graph.cols; j++){
            if(graph.grid[i][j] === 1){
                count++;
                graph.dfs(i, j);
            }
        }
    }
    return count
}

// Testcase 1
console.log(islandCount([
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0]
])); // Expected Output: 1

// Testcase 2
console.log(islandCount([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
])); // Expected Output: 3

// Testcase 3
console.log(islandCount([
    [1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 0, 0, 1, 1]
])); // Expected Output: 5

// Testcase 4
console.log(islandCount([
    [1, 0, 0, 0],
    [0, 1, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 0, 1]
])); // Expected Output: 4

// Testcase 5
console.log(islandCount([
    [1, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
])); // Expected Output: 6

// Testcase 6
console.log(islandCount([
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 1, 1, 0],
    [1, 1, 0, 0, 0]
])); // Expected Output: 2

// Testcase 7
console.log(islandCount([
    [1, 1, 1],
    [0, 0, 0],
    [1, 0, 1]
])); // Expected Output: 3