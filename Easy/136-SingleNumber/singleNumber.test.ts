import { singleNumber } from './singleNumber'; // Replace with the correct file path

describe('singleNumber', () => {
    test('returns the single number for a small array (example 1)', () => {
        const nums = [2, 2, 1];
        expect(singleNumber(nums)).toBe(1);
    });

    test('returns the single number for a small array (example 2)', () => {
        const nums = [4, 1, 2, 1, 2];
        expect(singleNumber(nums)).toBe(4);
    });

    test('returns the single number for an array with one element (example 3)', () => {
        const nums = [1];
        expect(singleNumber(nums)).toBe(1);
    });

    test('handles negative numbers correctly', () => {
        const nums = [-1, -2, -2];
        expect(singleNumber(nums)).toBe(-1);
    });

    test('handles a mix of positive and negative numbers', () => {
        const nums = [3, -3, 5, 5, -3];
        expect(singleNumber(nums)).toBe(3);
    });

/*
    test('handles a large array with a single number at the start', () => {
        const nums = [42, ...Array.from({ length: 1000 }, (_, i) => i + 1).flatMap(i => [i, i])];
        expect(singleNumber(nums)).toBe(42);
    });
*/

      test('handles a large array with a single number at the end', () => {
        const nums = [...Array.from({ length: 1000 }, (_, i) => i + 1).flatMap(i => [i, i]), 1001];
        expect(singleNumber(nums)).toBe(1001);
      });

    test('handles an array with all identical numbers except one', () => {
        const nums = [7, 7, 7, 7, 7, 6];
        expect(singleNumber(nums)).toBe(6);
    });
});
