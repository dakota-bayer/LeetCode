import { maxSubArray } from './maxSubArray'; // Adjust the import path as needed

describe('maxSubArray', () => {
    it('should return the correct maximum sum for a mixed array with positive and negative numbers', () => {
        const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
        const result = maxSubArray(nums);
        expect(result).toBe(6); // [4, -1, 2, 1] has the maximum sum of 6
    });

    it('should return the correct maximum sum for a single positive element array', () => {
        const nums = [1];
        const result = maxSubArray(nums);
        expect(result).toBe(1); // The single element is the maximum sum
    });

    it('should return the correct maximum sum for an array of all positive numbers', () => {
        const nums = [5, 4, -1, 7, 8];
        const result = maxSubArray(nums);
        expect(result).toBe(23); // [5, 4, -1, 7, 8] has the maximum sum of 23
    });

    it('should return the correct maximum sum for an array with all negative numbers', () => {
        const nums = [-3, -1, -4, -2];
        const result = maxSubArray(nums);
        expect(result).toBe(-1); // The maximum sum is the largest single negative number
    });

    it('should handle arrays with a single negative number', () => {
        const nums = [-5];
        const result = maxSubArray(nums);
        expect(result).toBe(-5); // The single element is the maximum sum
    });

    it('should return the correct maximum sum for an array with alternating positive and negative numbers', () => {
        const nums = [2, -1, 2, 3, -4, 1];
        const result = maxSubArray(nums);
        expect(result).toBe(6); // [2, -1, 2, 3] has the maximum sum of 6
    });

    it('should handle large arrays efficiently', () => {
        const nums = new Array(10 ** 5).fill(1); // Array of 100,000 elements all with value 1
        const result = maxSubArray(nums);
        expect(result).toBe(10 ** 5); // The sum of the entire array
    });
});