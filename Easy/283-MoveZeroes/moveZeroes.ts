/* 283. Move Zeroes

Given an integer array nums, move all 0's to the end of it while 
    maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
    Input: nums = [0,1,0,3,12]
    Output: [1,3,12,0,0]

Example 2:
    Input: nums = [0]
    Output: [0]

Constraints:

    1 <= nums.length <= 10^4
    -2^31 <= nums[i] <= (2^31) - 1

 
Follow up: Could you minimize the total number of operations done?

*/

/**
 Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums: number[]): void {
    // assume that l is set at a place where value = 0
    // and r is the spot we are currently looking at
    let l = 0;

    for (let r = 0; r < nums.length; r++) {
        if (nums[r] !== 0) {
            // we have a good value! swap it with the bad value (l)
            const temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
            l++;
        }
    }
};