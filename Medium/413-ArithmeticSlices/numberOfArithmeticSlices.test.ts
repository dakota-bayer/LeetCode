import { numberOfArithmeticSlices } from './numberOfArithmeticSlices';

describe('numberOfArithmeticSlices', () => {
    test('Example 1: nums = [1,2,3,4]', () => {
        const nums = [1, 2, 3, 4];
        const result = numberOfArithmeticSlices(nums);
        expect(result).toBe(3); // Subarrays: [1, 2, 3], [2, 3, 4], [1, 2, 3, 4]
    });

    test('Example 2: nums = [1]', () => {
        const nums = [1];
        const result = numberOfArithmeticSlices(nums);
        expect(result).toBe(0);
    });

    test('Arithmetic sequence with constant difference', () => {
        const nums = [7, 7, 7, 7];
        const result = numberOfArithmeticSlices(nums);
        expect(result).toBe(3); // Subarrays: [7,7,7], [7,7,7], [7,7,7,7]
    });

    test('Arithmetic sequence with negative difference', () => {
        const nums = [3, -1, -5, -9];
        const result = numberOfArithmeticSlices(nums);
        expect(result).toBe(3); // Subarrays: [3,-1,-5], [-1,-5,-9], [3,-1,-5,-9]
    });

    test('No arithmetic subarrays', () => {
        const nums = [1, 3, 8, 10];
        const result = numberOfArithmeticSlices(nums);
        expect(result).toBe(0);
    });

    test('Short array (less than 3 elements)', () => {
        const nums = [1, 2];
        const result = numberOfArithmeticSlices(nums);
        expect(result).toBe(0);
    });

    test('Large array with mixed differences', () => {
        const nums = [1, 2, 3, 8, 9, 10, 15, 16, 17, 18];
        const result = numberOfArithmeticSlices(nums);
        expect(result).toBe(5); // Subarrays: [1,2,3], [8,9,10], [15,16,17], [16,17,18], [15,16,17,18]
    });

    test('Array with one large arithmetic slice', () => {
        const nums = [10, 20, 30, 40, 50, 60];
        const result = numberOfArithmeticSlices(nums);
        expect(result).toBe(10); // Subarrays: [10,20,30], [20,30,40], ..., [10,20,30,40,50,60]
    });
});
