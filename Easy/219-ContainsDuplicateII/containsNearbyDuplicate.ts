/* 219. Contains Duplicate II

Given an integer array nums and an integer k, return true if 
    there are two distinct indices i and j in the array such that 
    nums[i] == nums[j] and abs(i - j) <= k.

Example 1:
    Input: nums = [1,2,3,1], k = 3
    Output: true

Example 2:
    Input: nums = [1,0,1,1], k = 1
    Output: true

Example 3:
    Input: nums = [1,2,3,1,2,3], k = 2
    Output: false

Constraints:
    1 <= nums.length <= 10^5
    -10^9 <= nums[i] <= 10^9
    0 <= k <= 10^5

*/

// uses the sliding window technique
export function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const set: Set<number> = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
        if (i >= k) {
            set.delete(nums[i - k]);
        }
    }
    return false;
}

export function containsNearbyDuplicate1(nums: number[], k: number): boolean {
    const map: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        const value = map.get(nums[i]) ?? -1;
        if (value >= 0) {
            if (i - value <= k) {
                return true;
            }
        }
        map.set(nums[i], i);
    }
    return false;
};

/*
const nums = [1, 2, 3, 1];
const k = 3;
containsNearbyDuplicate(nums, k);
*/