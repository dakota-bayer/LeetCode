/* 238. Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] 
    is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
    Input: nums = [1,2,3,4]
    Output: [24,12,8,6]

Example 2:
    Input: nums = [-1,1,0,-3,3]
    Output: [0,0,9,0,0]

Constraints:
    2 <= nums.length <= 10^5
    -30 <= nums[i] <= 30
    The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

*/

export function productExceptSelf(nums: number[]): number[] {
    const prefix: number[] = new Array(nums.length);
    for (let i = 0; i < prefix.length; i++) {
        prefix[i] = nums[i] * (prefix[i - 1] ?? 1);
    }

    const postfix: number[] = new Array(nums.length);
    for (let i = postfix.length - 1; i >= 0; i--) {
        postfix[i] = nums[i] * (postfix[i + 1] ?? 1);
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = (prefix[i - 1] ?? 1) * (postfix[i + 1] ?? 1);
        if(Math.abs(nums[i]) === 0) {
            nums[i] = 0;
        }
    }
    return nums;
};