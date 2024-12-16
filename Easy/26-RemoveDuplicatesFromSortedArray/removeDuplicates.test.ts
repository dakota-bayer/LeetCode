import { removeDuplicates } from "./removeDuplicates";

describe("removeDuplicates", () => {
    test("Example 1: nums = [1,1,2]", () => {
        const nums = [1, 1, 2];
        const k = removeDuplicates(nums);
        expect(k).toBe(2);
        expect(nums.slice(0, k)).toEqual([1, 2]);
    });

    test("Example 2: nums = [0,0,1,1,1,2,2,3,3,4]", () => {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        const k = removeDuplicates(nums);
        expect(k).toBe(5);
        expect(nums.slice(0, k)).toEqual([0, 1, 2, 3, 4]);
    });

    test("Single element array: nums = [1]", () => {
        const nums = [1];
        const k = removeDuplicates(nums);
        expect(k).toBe(1);
        expect(nums.slice(0, k)).toEqual([1]);
    });

    test("No duplicates: nums = [1,2,3,4,5]", () => {
        const nums = [1, 2, 3, 4, 5];
        const k = removeDuplicates(nums);
        expect(k).toBe(5);
        expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5]);
    });

    test("All elements are the same: nums = [1,1,1,1,1]", () => {
        const nums = [1, 1, 1, 1, 1];
        const k = removeDuplicates(nums);
        expect(k).toBe(1);
        expect(nums.slice(0, k)).toEqual([1]);
    });

    test("Long array with multiple duplicates: nums = [1,1,1,2,2,3,3,3,4,4,4,4,5,5,5,6,6,7,7,7]", () => {
        const nums = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7];
        const k = removeDuplicates(nums);
        expect(k).toBe(7);
        expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    test("Array with negatives: nums = [-2,-2,-1,-1,0,0,1,1,2,2]", () => {
        const nums = [-2, -2, -1, -1, 0, 0, 1, 1, 2, 2];
        const k = removeDuplicates(nums);
        expect(k).toBe(5);
        expect(nums.slice(0, k)).toEqual([-2, -1, 0, 1, 2]);
    });

    test("Array with alternating duplicates: nums = [1,2,2,3,4,4,5,6,6,7]", () => {
        const nums = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
        const k = removeDuplicates(nums);
        expect(k).toBe(7);
        expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
});
