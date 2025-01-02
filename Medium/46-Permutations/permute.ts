/* 46. Permutations

Given an array nums of distinct integers, return all the possible permutations. 
You can return the answer in any order.

Example 1:
    Input: nums = [1,2,3]
    Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
    Input: nums = [0,1]
    Output: [[0,1],[1,0]]

Example 3:
    Input: nums = [1]
    Output: [[1]]

Constraints:
    1 <= nums.length <= 6
    -10 <= nums[i] <= 10
    All the integers of nums are unique.

*/

export function permute(nums: number[]): number[][] {
    if (nums.length === 0) {
        return [];
    }

    return permuteInternal(nums);
};

function permuteInternal(nums: number[]): number[][] {
    if (nums.length === 0) {
        return [[]];
    }

    const perms = permuteInternal(nums.slice(1, nums.length));
    const result: number[][] = [];

    for (let p of perms) {
        for (let i = 0; i < p.length + 1; i++) {
            const p_copy = [...p];
            p_copy.splice(i, 0, nums[0]);
            result.push(p_copy);
        }
    }

    return result;
};