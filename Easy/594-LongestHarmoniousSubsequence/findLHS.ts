/* 594. Longest Harmonious Subsequence

We define a harmonious array as an array where the difference 
    between its maximum value and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest 
    harmonious subsequence among all its possible subsequences.

Example 1:
    Input: nums = [1,3,2,2,5,2,3,7]
    Output: 5
    Explanation: The longest harmonious subsequence is [3,2,2,2,3].

Example 2:
    Input: nums = [1,2,3,4]
    Output: 2
    Explanation: The longest harmonious subsequences are [1,2], [2,3], 
        and [3,4], all of which have a length of 2.

Example 3:
    Input: nums = [1,1,1,1]
    Output: 0
    Explanation: No harmonic subsequence exists. 

Constraints:
    1 <= nums.length <= 2 * 10^4
    -10^9 <= nums[i] <= 10^9

*/

// solution using sliding window (slower but less memory used)
export function findLHS(nums: number[]): number {
    if (nums.length < 2) {
        return 0;
    }
    let longest = 0;

    nums.sort((a, b) => a - b);

    // [1, 2, 2, 2, 3, 3, 3, 4, 5, 5]
    let l = 0;
    let r = 0;

    while (r < nums.length) {
        if (nums[r] - nums[l] == 1) {
            longest = Math.max(longest, r - l + 1);
        }
        while (nums[r] - nums[l] > 1) {
            l++;
        }
        r++;
    }

    return longest;
}


// solution using hashmap
export function findLHS2(nums: number[]): number {
    const map: Map<number, number> = new Map();
    for (const num of nums) {
        const val = map.get(num) ?? 0;
        map.set(num, val + 1);
    }

    let longest = 0;
    for (const [key, val] of map) {
        let below = map.get(key - 1) ?? -1;
        let above = map.get(key + 1) ?? -1;
        if (above > 0 || below > 0) {
            longest = Math.max(longest, val + Math.max(below, above));
        }
    }

    return longest;
};