/* 442. Find All Duplicates in an Array

Given an integer array nums of length n where all the integers of nums 
    are in the range [1, n] and each integer appears at most twice, 
    return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant 
    auxiliary space, excluding the space needed to store the output

Example 1:
    Input: nums = [4,3,2,7,8,2,3,1]
    Output: [2,3]

Example 2:
    Input: nums = [1,1,2]
    Output: [1]

Example 3:
    Input: nums = [1]
    Output: []

Constraints:
    n == nums.length
    1 <= n <= 10^5
    1 <= nums[i] <= n
    Each element in nums appears once or twice.

*/

export function findDuplicates(nums: number[]): number[] {
    const duplicates: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        const duplicate = Math.abs(nums[i]);

        if (nums[duplicate - 1] < 0) {
            duplicates.push(duplicate);
        }
        else {
            nums[duplicate - 1] *= -1;
        }
    }

    return duplicates;
}