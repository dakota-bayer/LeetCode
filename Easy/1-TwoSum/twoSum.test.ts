import { twoSum } from "./twoSum";

describe("twoSum", () => {
    test("Example 1: nums = [2,7,11,15], target = 9", () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        expect(twoSum(nums, target)).toEqual([0, 1]);
    });

    test("Example 2: nums = [3,2,4], target = 6", () => {
        const nums = [3, 2, 4];
        const target = 6;
        expect(twoSum(nums, target)).toEqual([1, 2]);
    });

    test("Example 3: nums = [3,3], target = 6", () => {
        const nums = [3, 3];
        const target = 6;
        expect(twoSum(nums, target)).toEqual([0, 1]);
    });

    test("Edge Case: nums = [1,0,-1], target = -1", () => {
        const nums = [1, 0, -1];
        const target = -1;
        expect(twoSum(nums, target)).toEqual([1, 2]);
    });

    test("Large Positive Numbers: nums = [100000,50000,150000], target = 200000", () => {
        const nums = [100000, 50000, 150000];
        const target = 200000;
        expect(twoSum(nums, target)).toEqual([1, 2]);
    });

    test("Large Negative Numbers: nums = [-100000,-50000,-150000], target = -200000", () => {
        const nums = [-100000, -50000, -150000];
        const target = -200000;
        expect(twoSum(nums, target)).toEqual([1, 2]);
    });

    test("Mixed Positive and Negative Numbers: nums = [-10,20,10,-20], target = 0", () => {
        const nums = [-10, 20, 10, -20];
        const target = 0;
        expect(twoSum(nums, target)).toEqual([0, 2]);
    });

    test("Single Valid Pair in Longer Array: nums = [1,2,3,4,5,6,7,8,9], target = 17", () => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const target = 17;
        expect(twoSum(nums, target)).toEqual([7, 8]);
    });

    test("First and Last Indices: nums = [0, 4, 3, 0], target = 0", () => {
        const nums = [0, 4, 3, 0];
        const target = 0;
        expect(twoSum(nums, target)).toEqual([0, 3]);
    });
});
