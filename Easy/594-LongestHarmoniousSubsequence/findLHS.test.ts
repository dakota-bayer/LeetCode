import { findLHS } from './findLHS';

describe('findLHS', () => {
    test('should return 5 for the input [1,3,2,2,5,2,3,7] (Example 1)', () => {
        const nums = [1, 3, 2, 2, 5, 2, 3, 7];
        expect(findLHS(nums)).toBe(5);
    });

    test('should return 2 for the input [1,2,3,4] (Example 2)', () => {
        const nums = [1, 2, 3, 4];
        expect(findLHS(nums)).toBe(2);
    });

    test('should return 0 for the input [1,1,1,1] (Example 3)', () => {
        const nums = [1, 1, 1, 1];
        expect(findLHS(nums)).toBe(0);
    });

    test('should return 0 for an empty array', () => {
        const nums: number[] = [];
        expect(findLHS(nums)).toBe(0);
    });

    test('should handle a single-element array', () => {
        const nums = [5];
        expect(findLHS(nums)).toBe(0);
    });

    test('should return 5 for the input [1,2,2,1,3,2,3,4]', () => {
        const nums = [1, 2, 2, 1, 3, 2, 3, 4];
        expect(findLHS(nums)).toBe(5);
    });

    test('should handle negative numbers and return 4 for input [-1,0,0,-1,-1,-2]', () => {
        const nums = [-1, 0, 0, -1, -1, -2];
        expect(findLHS(nums)).toBe(5);
    });

    test('should handle large input array with a clear harmonious subsequence', () => {
        const nums = Array(10000).fill(1).concat(Array(10000).fill(2));
        expect(findLHS(nums)).toBe(20000);
    });

    test('should return 0 when no harmonious subsequences exist (all unique numbers)', () => {
        const nums = [10, 20, 30, 40, 50];
        expect(findLHS(nums)).toBe(0);
    });

    test('should return the correct value when the array contains duplicates with a large range', () => {
        const nums = [1, 1, 1, 1, 1, 2, 2, 2, 2, 3];
        expect(findLHS(nums)).toBe(9);
    });
});
