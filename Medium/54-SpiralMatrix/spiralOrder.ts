/* 54. Spiral Matrix

Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:
    Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
    Output: [1,2,3,6,9,8,7,4,5]

Example 2:
    Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
    Output: [1,2,3,4,8,12,11,10,9,5,6,7]

Constraints:
    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 10
    -100 <= matrix[i][j] <= 100

*/

export function spiralOrder(matrix: number[][]): number[] {
    if (!matrix || !matrix.length) return [];

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    const spiral: number[] = [];

    while (top <= bottom && left <= right) {
        // Add the top row (left to right)
        spiral.push(...matrix[top].slice(left, right + 1));
        top++;

        // Add the right column (top to bottom)
        for (let i = top; i <= bottom; i++) {
            spiral.push(matrix[i][right]);
        }
        right--;

        if (top <= bottom) {
            // Add the bottom row (right to left)
            spiral.push(...matrix[bottom].slice(left, right + 1).reverse());
            bottom--;
        }

        if (left <= right) {
            // Add the left column (bottom to top)
            for (let i = bottom; i >= top; i--) {
                spiral.push(matrix[i][left]);
            }
            left++;
        }
    }

    return spiral;
}


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
const matrix2 = [
    [1],
    [2],
    [3],
    [4]
];
const matrix3 = [
    [1, 2, 3, 4]
];
spiralOrder(matrix);
