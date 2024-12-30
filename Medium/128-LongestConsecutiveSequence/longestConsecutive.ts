/* 128. Longest Consecutive Sequence

Given an unsorted array of integers nums, return the length of the longest 
    consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:
    Input: nums = [100,4,200,1,3,2]
    Output: 4
    Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. 
        Therefore its length is 4.

Example 2:
    Input: nums = [0,3,7,2,5,8,4,6,0,1]
    Output: 9

Constraints:
    0 <= nums.length <= 10^5
    -10^9 <= nums[i] <= 10^9

*/

export function longestConsecutive(nums: number[]): number {
    const set: Set<number> = new Set(nums);

    let longest = 0;

    for (let value of set) {
        if (set.has(value - 1)) {
            // not the start of a sequence, move to check next #
            continue;
        }

        let current = 1;
        while (set.has(value + 1)) {
            value++;
            current++;
        }

        longest = Math.max(longest, current);
    }

    return longest;
}

export function longestConsecutive2(nums: number[]): number {
    const set: Set<number> = new Set(nums);

    let longest = 0;
    for (let value of set) {
        let current = 0;
        while (set.has(value)) {
            current++;
            value += 1;
        }
        longest = Math.max(longest, current);
    }

    return longest;
};