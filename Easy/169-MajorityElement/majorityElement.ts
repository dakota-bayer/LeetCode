/* 169. Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times.
    You may assume that the majority element always exists in the array.

Example 1:
    Input: nums = [3,2,3]
    Output: 3

Example 2:
    Input: nums = [2,2,1,1,1,2,2]
    Output: 2

Constraints:
    n == nums.length
    1 <= n <= 5 * 10^4
    -10^9 <= nums[i] <= 10^9
 
Follow-up: Could you solve the problem in linear time and in O(1) space?

*/

// Uses the Boyer-Moore majority voting algorithm
// This algorithm works when there is an element that appears more than half the time (> n / 2)
export function majorityElement(nums: number[]): number {
    let candidate = nums[0];
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
        }

        count += (nums[i] === candidate) ? 1 : -1;
    }

    return candidate;
}

export function majorityElementSlow(nums: number[]): number {
    const map: Map<number, number> = new Map<number, number>();
    let max: [number, number] = [nums[0], 1];

    for (let i = 0; i < nums.length; i++) {
        let frequency = map.get(nums[i]) ?? 0;
        frequency++;
        map.set(nums[i], frequency);

        if (frequency > max[1]) {
            max = [nums[i], frequency];
        }
    }

    return max[0];
};