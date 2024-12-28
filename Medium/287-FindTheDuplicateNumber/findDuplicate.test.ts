import { findDuplicate } from './findDuplicate';

describe('findDuplicate', () => {
    test('should return the correct duplicate for a basic case', () => {
        const nums = [1, 3, 4, 2, 2];
        const expected = 2;
        expect(findDuplicate(nums)).toBe(expected);
    });

    test('should return the correct duplicate when the duplicate is at the start', () => {
        const nums = [3, 1, 3, 4, 2];
        const expected = 3;
        expect(findDuplicate(nums)).toBe(expected);
    });

    test('should return the duplicate when all elements are the same', () => {
        const nums = [3, 3, 3, 3, 3];
        const expected = 3;
        expect(findDuplicate(nums)).toBe(expected);
    });

    test('should return the correct duplicate for a larger array', () => {
        const nums = [1, 5, 3, 4, 2, 5];
        const expected = 5;
        expect(findDuplicate(nums)).toBe(expected);
    });

    test('should handle cases where the duplicate is the smallest number', () => {
        const nums = [2, 1, 2, 3, 4];
        const expected = 2;
        expect(findDuplicate(nums)).toBe(expected);
    });

    test('should handle cases where the duplicate is the largest number', () => {
        const nums = [1, 4, 3, 2, 4];
        const expected = 4;
        expect(findDuplicate(nums)).toBe(expected);
    });

    test('should handle cases where the duplicate is near the middle', () => {
        const nums = [1, 2, 3, 4, 2];
        const expected = 2;
        expect(findDuplicate(nums)).toBe(expected);
    });

    test('should handle cases with sequential duplicates', () => {
        const nums = [1, 1, 2, 3, 4];
        const expected = 1;
        expect(findDuplicate(nums)).toBe(expected);
    });

    test('should handle large input arrays efficiently', () => {
        const n = 100000;
        const nums = Array.from({ length: n }, (_, i) => i + 1);
        nums.push(50000); // Add duplicate
        expect(findDuplicate(nums)).toBe(50000);
    });
});
