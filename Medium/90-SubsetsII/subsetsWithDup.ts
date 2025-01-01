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

    function dfs(i: number, subset: number[]) {
        if (i >= nums.length) {
            output.push([...subset]);
            return;
        }

        // recrusive call when adding the current number
        subset.push(nums[i]);
        dfs(i + 1, subset);

        // recursive call without adding the current number
        subset.pop();

        while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i++;
        }
        dfs(i + 1, subset);
    }

    dfs(0, []);

    return output;
};

/*
const arr = [1, 2, 2];
subsetsWithDup(arr);
*/