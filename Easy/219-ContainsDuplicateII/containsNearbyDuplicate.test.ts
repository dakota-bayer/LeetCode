import { containsNearbyDuplicate } from './containsNearbyDuplicate';

describe('containsNearbyDuplicate', () => {
    test('should return true when there are duplicates within range k (Example 1)', () => {
        const nums = [1, 2, 3, 1];
        const k = 3;
        expect(containsNearbyDuplicate(nums, k)).toBe(true);
    });

    test('should return true when there are duplicates within range k (Example 2)', () => {
        const nums = [1, 0, 1, 1];
        const k = 1;
        expect(containsNearbyDuplicate(nums, k)).toBe(true);
    });

    test('should return false when there are duplicates but not within range k (Example 3)', () => {
        const nums = [1, 2, 3, 1, 2, 3];
        const k = 2;
        expect(containsNearbyDuplicate(nums, k)).toBe(false);
    });

    test('should return false when array is empty', () => {
        const nums: number[] = [];
        const k = 5;
        expect(containsNearbyDuplicate(nums, k)).toBe(false);
    });

    test('should return false when k is 0', () => {
        const nums = [1, 2, 3, 1];
        const k = 0;
        expect(containsNearbyDuplicate(nums, k)).toBe(false);
    });

    test('should handle negative values in nums', () => {
        const nums = [-1, -2, -3, -1];
        const k = 3;
        expect(containsNearbyDuplicate(nums, k)).toBe(true);
    });

    test('should return true for large k if duplicates exist', () => {
        const nums = [1, 2, 3, 4, 1];
        const k = 4;
        expect(containsNearbyDuplicate(nums, k)).toBe(true);
    });

    test('should return false for large k if no duplicates exist', () => {
        const nums = [1, 2, 3, 4, 5];
        const k = 4;
        expect(containsNearbyDuplicate(nums, k)).toBe(false);
    });

    test('should handle a large array with duplicates out of range', () => {
        const nums = Array(10 ** 5).fill(0).map((_, i) => i % 10);
        const k = 5;
        expect(containsNearbyDuplicate(nums, k)).toBe(false);
    });
});
