import { minSubArrayLen } from './minSubArrayLen';

describe('minSubArrayLen', () => {
    it('should return the minimal length of a subarray for typical input', () => {
        const target = 7;
        const nums = [2, 3, 1, 2, 4, 3];
        const expected = 2; // The subarray [4, 3]
        expect(minSubArrayLen(target, nums)).toBe(expected);
    });

    it('should return 1 when the target can be met by a single element', () => {
        const target = 4;
        const nums = [1, 4, 4];
        const expected = 1; // The subarray [4]
        expect(minSubArrayLen(target, nums)).toBe(expected);
    });

    it('should return 0 when no subarray can meet the target', () => {
        const target = 11;
        const nums = [1, 1, 1, 1, 1, 1, 1, 1];
        const expected = 0; // No subarray meets the target
        expect(minSubArrayLen(target, nums)).toBe(expected);
    });

    it('should handle the case where the entire array is required to meet the target', () => {
        const target = 15;
        const nums = [1, 2, 3, 4, 5];
        const expected = 5; // The entire array [1, 2, 3, 4, 5]
        expect(minSubArrayLen(target, nums)).toBe(expected);
    });

    it('should handle an array with only one element equal to the target', () => {
        const target = 10;
        const nums = [10];
        const expected = 1; // The subarray [10]
        expect(minSubArrayLen(target, nums)).toBe(expected);
    });

    it('should return 0 for an empty array', () => {
        const target = 5;
        const nums: number[] = [];
        const expected = 0; // No subarray exists
        expect(minSubArrayLen(target, nums)).toBe(expected);
    });

    it('should return minimal length for a long array with multiple valid subarrays', () => {
        const target = 15;
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const expected = 2; // The subarray [7, 8]
        expect(minSubArrayLen(target, nums)).toBe(expected);
    });

    it('should handle edge case with large numbers', () => {
        const target = 1000000;
        const nums = [500000, 500000, 1, 2, 3];
        const expected = 2; // The subarray [500000, 500000]
        expect(minSubArrayLen(target, nums)).toBe(expected);
    });

    it('should return the minimal subarray length for all elements equal to the target', () => {
        const target = 5;
        const nums = [5, 5, 5, 5];
        const expected = 1; // Any subarray with one element [5]
        expect(minSubArrayLen(target, nums)).toBe(expected);
    });

    it('should handle large arrays efficiently', () => {
        const target = 10000;
        const nums = new Array(100000).fill(1); // Array of 100,000 ones
        nums[99999] = 10000; // Set the last element to 10000
        const expected = 1; // Subarray [10000]
        expect(minSubArrayLen(target, nums)).toBe(expected);
    });

    it('should return the minimal length for target = 213 and nums = [12,28,83,4,25,26,25,2,25,25,25,12]', () => {
        const target = 213;
        const nums = [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12];
        const expected = 8; // The subarray [28, 83, 4, 25, 26, 25, 2, 25] has a sum >= 213
        expect(minSubArrayLen(target, nums)).toBe(expected);
    });
});
