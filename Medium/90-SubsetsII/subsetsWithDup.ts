/* 90. Subsets II

Given an integer array nums that may contain duplicates, 
    return all possible subsets (the power set).

The solution set must not contain duplicate subsets. 
Return the solution in any order.

Example 1:
    Input: nums = [1,2,2]
    Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

Example 2:
    Input: nums = [0]
    Output: [[],[0]]

Constraints:
    1 <= nums.length <= 10
    -10 <= nums[i] <= 10

*/

export function subsetsWithDup(nums: number[]): number[][] {
    const output: number[][] = [];
    nums.sort((a, b) => a - b);

    function dfs(i: number, current: number[]) {
        if (i >= nums.length) {
            output.push(current);
            return;
        }

        const added = [...current];
        added.push(nums[i]);
        dfs(i + 1, added);

        let j = i;
        while (j > 0 && j < nums.length && nums[j] === nums[j - 1]) {
            j++;
            if (j >= nums.length) {
                return;
            }
        }
        dfs(j + 1, [...current]);
    }

    dfs(0, []);

    return output;
};

const arr = [1, 2, 2];
subsetsWithDup(arr);