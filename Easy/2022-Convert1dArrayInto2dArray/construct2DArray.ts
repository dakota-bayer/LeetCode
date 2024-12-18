/* 2022. Convert 1D Array into 2D Array

You are given a 0-indexed 1-dimensional (1D) integer array original, 
    and two integers, m and n. 
You are tasked with creating a 2-dimensional (2D) array with  
    m rows and n columns using all the elements from original.

The elements from indices 0 to n - 1 (inclusive) of original should 
    form the first row of the constructed 2D array, the elements from 
    indices n to 2 * n - 1 (inclusive) should form the second row of the 
    constructed 2D array, and so on.

Return an m x n 2D array constructed according to the above procedure, 
    or an empty 2D array if it is impossible.

Example 1:
    Input: original = [1,2,3,4], m = 2, n = 2
    Output: [[1,2],[3,4]]
    Explanation: The constructed 2D array should contain 2 rows and 2 columns.
        The first group of n=2 elements in original, [1,2], becomes the first 
            row in the constructed 2D array.
        The second group of n=2 elements in original, [3,4], becomes the second 
            row in the constructed 2D array.

Example 2:
    Input: original = [1,2,3], m = 1, n = 3
    Output: [[1,2,3]]
    Explanation: The constructed 2D array should contain 1 row and 3 columns.
        Put all three elements in original into the first row of the constructed 2D array.

Example 3:
Input: original = [1,2], m = 1, n = 1
Output: []
Explanation: There are 2 elements in original.
    It is impossible to fit 2 elements in a 1x1 2D array, so return an empty 2D array.

Constraints:
    1 <= original.length <= 5 * 10^4
    1 <= original[i] <= 10^5
    1 <= m, n <= 4 * 10^4

*/

export function construct2DArray(original: number[], m: number, n: number): number[][] {
    if (original.length !== m * n) {
        return [];
    }

    let modified: number[][] = [];
    let k = 0;

    for (let mM = 0; mM < m && k < original.length; mM++) {
        const current: number[] = [];
        for (let nN = 0; nN < n && k < original.length; nN++) {
            current[nN] = original[k];
            k++;
        }
        modified[mM] = current;
    }
    return modified;
};

function print(arr: number[][]) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        const length = arr[i].length;
        for (let j = 0; j < length; j++) {
            str += `${arr[i][j]} `
        }
        str += '\n';
    }
    console.log(str);
}

/*
const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const m = 4, n = 3;

// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// Output:
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9],
//  [10, 11, 12]]

const result = construct2DArray(original, m, n);
print(result);
*/