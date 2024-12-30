import { longestConsecutive } from './longestConsecutive';

describe('longestConsecutive', () => {
    test('Example 1: Standard input', () => {
        const nums = [100, 4, 200, 1, 3, 2];
        const expected = 4; // [1, 2, 3, 4]
        expect(longestConsecutive(nums)).toBe(expected);
    });

    test('Example 2: Large consecutive sequence', () => {
        const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
        const expected = 9; // [0, 1, 2, 3, 4, 5, 6, 7, 8]
        expect(longestConsecutive(nums)).toBe(expected);
    });

    test('Edge Case: Empty array', () => {
        const nums: number[] = [];
        const expected = 0;
        expect(longestConsecutive(nums)).toBe(expected);
    });

    test('Edge Case: Single element', () => {
        const nums = [42];
        const expected = 1;
        expect(longestConsecutive(nums)).toBe(expected);
    });

    test('Edge Case: All identical elements', () => {
        const nums = [7, 7, 7, 7];
        const expected = 1;
        expect(longestConsecutive(nums)).toBe(expected);
    });

    test('Negative numbers included', () => {
        const nums = [-1, -2, -3, 0, 1];
        const expected = 5; // [-3, -2, -1, 0, 1]
        expect(longestConsecutive(nums)).toBe(expected);
    });

    test('Unsorted input with gaps', () => {
        const nums = [10, 5, 12, 6, 7, 13, 8, 9, 11];
        const expected = 9; // [5, 6, 7, 8, 9, 10, 11, 12, 13]
        expect(longestConsecutive(nums)).toBe(expected);
    });

    test('Edge Case: Large range of numbers', () => {
        const nums = [-1000000000, -999999999, 0, 1000000000];
        const expected = 2; // [-1000000000, -999999999]
        expect(longestConsecutive(nums)).toBe(expected);
    });

    test('Duplicates in array', () => {
        const nums = [1, 2, 2, 3, 4];
        const expected = 4; // [1, 2, 3, 4]
        expect(longestConsecutive(nums)).toBe(expected);
    });
});
