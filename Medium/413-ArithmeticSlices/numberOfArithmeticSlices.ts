/* 413. Arithmetic Slices

An integer array is called arithmetic if it consists of at least three elements and 
    if the difference between any two consecutive elements is the same.

For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.

Given an integer array nums, return the number of arithmetic subarrays of nums.

A subarray is a contiguous subsequence of the array.

Example 1:
    Input: nums = [1,2,3,4]
    Output: 3
    Explanation: We have 3 arithmetic slices in nums: [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself.

Example 2:
    Input: nums = [1]
    Output: 0

Constraints:
    1 <= nums.length <= 5000
    -1000 <= nums[i] <= 1000

*/

export function numberOfArithmeticSlices(nums: number[]): number {
    let count = 0;
    let end = 2;
    let streak = 0;

    while (end < nums.length) {
        if (nums[end] - nums[end - 1] === nums[end - 1] - nums[end - 2]) {
            streak += 1;
            count += streak;
        }
        else {
            streak = 0;
        }
        end++;
    }

    return count;
};