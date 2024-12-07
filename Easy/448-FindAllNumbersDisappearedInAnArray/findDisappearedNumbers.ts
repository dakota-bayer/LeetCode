/* 448. Find All Disappeared Numbers in an Array

Given an array nums of n integers where nums[i] is in the range [1, n], 
    return an array of all the integers in the range [1, n] that do not appear in nums. 

Example 1:
    Input: nums = [4,3,2,7,8,2,3,1]
    Output: [5,6]

Example 2:
    Input: nums = [1,1]
    Output: [2]

Constraints:
    n == nums.length
    1 <= n <= 10^5
    1 <= nums[i] <= n

Follow up: Could you do it without extra space and in O(n) runtime?
    You may assume the returned list does not count as extra space.

*/

export function findDisappearedNumbers(nums: number[]): number[] {
    const set: Set<number> = new Set<number>(nums);
    const missing: number[] = [];

    for(let i = 1; i <= nums.length; i++){
        if(!set.has(i)){
            missing.push(i);
        }
    }

    return missing;
};