/* 79. Word Search

Given an m x n grid of characters board and a string word, 
    return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, 
    where adjacent cells are horizontally or vertically neighboring. 
    The same letter cell may not be used more than once.

Example 1:
    Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
    Output: true

Example 2:
    Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
    Output: true

Example 3:
    Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
    Output: false

Constraints:
    m == board.length
    n = board[i].length
    1 <= m, n <= 6
    1 <= word.length <= 15
    board and word consists of only lowercase and uppercase English letters.

Follow up: Could you use search pruning to make your solution faster with a larger board?

*/

export function exist(board: string[][], word: string): boolean {
    const rows = board.length;
    const cols = board[0].length;
    const path: Set<string> = new Set();

    function dfs(r: number, c: number, i: number): boolean {
        if (i === word.length) {
            return true;
        }

        if (r < 0 || c < 0 ||
            r >= rows || c >= cols ||
            word[i] !== board[r][c] ||
            path.has(`${r},${c}`)) {
            return false;
        }

        path.add(`${r},${c}`);

        const result = dfs(r + 1, c, i + 1) ||
            dfs(r - 1, c, i + 1) ||
            dfs(r, c + 1, i + 1) ||
            dfs(r, c - 1, i + 1);

        path.delete(`${r},${c}`);
        return result;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
};

/*
const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
];
const word = "ABCB";

exist(board, word);
*/