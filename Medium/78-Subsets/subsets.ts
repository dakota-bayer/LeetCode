/* 78. Subsets

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
    Input: nums = [1,2,3]
    Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:
    Input: nums = [0]
    Output: [[],[0]]

Constraints:
    1 <= nums.length <= 10
    -10 <= nums[i] <= 10
    All the numbers of nums are unique.

*/

export function subsets(nums: number[]): number[][] {
    const output: number[][] = [];

    function dfs(i: number, current: number[]): void {
        if (i >= nums.length) {
            output.push(current);
            return;
        }

        // add the ith number
        const added = [...current];
        added.push(nums[i]);
        dfs(i + 1, added);

        // don't add the ith number
        dfs(i + 1, [...current]);
    }

    dfs(0, []);

    return output;
};

/*
const nums = [1, 2, 3];
const expected = [
    [],
    [1],
    [2],
    [1, 2],
    [3],
    [1, 3],
    [2, 3],
    [1, 2, 3]
];
subsets(nums);
*/