import { productExceptSelf } from './productExceptSelf';

describe('productExceptSelf', () => {
    test('should return the correct product array for a basic case', () => {
        const nums = [1, 2, 3, 4];
        const expected = [24, 12, 8, 6];
        expect(productExceptSelf(nums)).toEqual(expected);
    });

    test('should handle arrays with a zero', () => {
        const nums = [-1, 1, 0, -3, 3];
        const expected = [0, 0, 9, 0, 0];
        expect(productExceptSelf(nums)).toEqual(expected);
    });

    test('should handle arrays with all positive numbers', () => {
        const nums = [2, 3, 4, 5];
        const expected = [60, 40, 30, 24];
        expect(productExceptSelf(nums)).toEqual(expected);
    });

    test('should handle arrays with all negative numbers', () => {
        const nums = [-1, -2, -3, -4];
        const expected = [-24, -12, -8, -6];
        expect(productExceptSelf(nums)).toEqual(expected);
    });

    test('should handle arrays with a single zero', () => {
        const nums = [0, 2, 3, 4];
        const expected = [24, 0, 0, 0];
        expect(productExceptSelf(nums)).toEqual(expected);
    });

    test('should handle arrays with multiple zeros', () => {
        const nums = [0, 0, 3, 4];
        const expected = [0, 0, 0, 0];
        expect(productExceptSelf(nums)).toEqual(expected);
    });

    test('should handle arrays with two elements', () => {
        const nums = [5, 10];
        const expected = [10, 5];
        expect(productExceptSelf(nums)).toEqual(expected);
    });

    test('should handle large arrays efficiently', () => {
        const nums = Array(100000).fill(1).map((_, i) => i + 1);
        const result = productExceptSelf(nums);
        expect(result).toHaveLength(100000);
        expect(result[0]).toBe(nums.slice(1).reduce((a, b) => a * b, 1));
    });

    test('should handle arrays with repeated elements', () => {
        const nums = [2, 2, 2, 2];
        const expected = [8, 8, 8, 8];
        expect(productExceptSelf(nums)).toEqual(expected);
    });
});
