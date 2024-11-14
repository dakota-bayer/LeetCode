/*  217. Contains Duplicates

Given an integer array nums, return true if any value appears at least twice in the array,
    and return false if every element is distinct.

Example 1:
    Input: nums = [1,2,3,1]
    Output: true
    Explanation:
    The element 1 occurs at the indices 0 and 3.

Example 2:
    Input: nums = [1,2,3,4]
    Output: false
    Explanation:
    All elements are distinct.

Example 3:
    Input: nums = [1,1,1,3,3,4,3,2,4,2]
    Output: true

Constraints:

    1 <= nums.length <= 105
    -10^9 <= nums[i] <= 10^9
*/

export function containsDuplicate(nums: number[]): boolean {
    // OPTION 1 - time limit exceeded
    // for(let i = 0; i < nums.length; i++){
    //     const current = nums[i];
    //     for(let j = i + 1; j < nums.length; j++){
    //         if(nums[j] === current){
    //             return true;
    //         }
    //     }
    // }
    // return false;

    // OPTION 2 - good!
    //return new Set(nums).size < nums.length;

    // OPTION 3 - good too
    const set = new Set();
    for(let num of nums){
        if(set.has(num)){
            return true;
        }
        set.add(num);
    }

    return false;

    // It is O(n) to add the items to the set. 
    // It is O(n^2) to do it my first way
};