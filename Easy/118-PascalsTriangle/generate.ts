/* 118. Pascal's Triangle

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
    Input: numRows = 5
    Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
    Input: numRows = 1
    Output: [[1]]

Constraints:
    1 <= numRows <= 30
*/

export function generate(numRows: number): number[][] {
  const output: number[][] = [[1]];
  let i: number = 0;

  let previous: number[] = output[0];

  while (i < numRows) {
    const row: number[] = [];
    row.push(1);

    for (let j = 1; j < previous.length - 1; j++) {
      row.push(previous[j - 1] + previous[j]);
    }

    row.push(1);

    output.push(row);
    previous = row;
    i++;
  }

  return output;
}

const numRows = 5;
const expected = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
generate(numRows);
