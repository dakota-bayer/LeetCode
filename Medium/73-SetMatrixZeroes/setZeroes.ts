/* 73. Set Matrix Zeroes

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
You must do it in place.

Example 1:
    Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
    Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:
    Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
    Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

Constraints:
    m == matrix.length
    n == matrix[0].length
    1 <= m, n <= 200
    -2^31 <= matrix[i][j] <= (2^31) - 1

Follow up:
    A straightforward solution using O(mn) space is probably a bad idea.
    A simple improvement uses O(m + n) space, but still not the best solution.
    Could you devise a constant space solution?

*/

/**
Do not return anything, modify matrix in-place instead.
*/
export function setZeroes(matrix: number[][]): void {
    const rows: Set<number> = new Set();
    const cols: Set<number> = new Set();

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }

    for (let row of rows.values()) {
        matrix[row].fill(0);
    }

    for (let col of cols.values()) {
        matrix.forEach(row => row[col] = 0);
    }
};

/*
const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
];
const expected = [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
];
setZeroes(matrix);
*/