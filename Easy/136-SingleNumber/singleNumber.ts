/* 136. Single Number

Given a non-empty array of integers nums, every element appears twice except for one. 
    Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
    Input: nums = [2,2,1]
    Output: 1

Example 2:
    Input: nums = [4,1,2,1,2]
    Output: 4

Example 3:
    Input: nums = [1]
    Output: 1

Constraints:
    1 <= nums.length <= 3 * 10^4
    -3 * 10^4 <= nums[i] <= 3 * 10^4
    Each element in the array appears twice except for one element which appears only once.

*/

export function singleNumber(nums: number[]): number {
    const map: Map<number, number> = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], 2);
        }
        else {
            map.set(nums[i], 1);
        }
    }

    for (let [key, value] of map.entries()) {
        if (value === 1) {
            return key;
        }
    }

    return -1;
};