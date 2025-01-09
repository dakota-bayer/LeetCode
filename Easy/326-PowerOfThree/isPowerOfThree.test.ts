import { isPowerOfThree } from './isPowerOfThree';

describe('isPowerOfThree', () => {
    test('should return true for n = 1 (3^0)', () => {
        expect(isPowerOfThree(1)).toBe(true);
    });

    test('should return true for n = 3 (3^1)', () => {
        expect(isPowerOfThree(3)).toBe(true);
    });

    test('should return true for n = 9 (3^2)', () => {
        expect(isPowerOfThree(9)).toBe(true);
    });

    test('should return true for n = 27 (3^3)', () => {
        expect(isPowerOfThree(27)).toBe(true);
    });

    test('should return false for n = 0', () => {
        expect(isPowerOfThree(0)).toBe(false);
    });

    test('should return false for negative numbers', () => {
        expect(isPowerOfThree(-1)).toBe(false);
        expect(isPowerOfThree(-27)).toBe(false);
    });

    test('should return false for numbers that are not powers of three', () => {
        expect(isPowerOfThree(2)).toBe(false);
        expect(isPowerOfThree(4)).toBe(false);
        expect(isPowerOfThree(10)).toBe(false);
    });

    test('should return true for large powers of three', () => {
        expect(isPowerOfThree(243)).toBe(true); // 3^5
        expect(isPowerOfThree(729)).toBe(true); // 3^6
    });

    test('should return false for large numbers that are not powers of three', () => {
        expect(isPowerOfThree(500)).toBe(false);
        expect(isPowerOfThree(1000)).toBe(false);
    });

    test('should handle edge cases near integer boundaries', () => {
        expect(isPowerOfThree(2 ** 31 - 1)).toBe(false);
        expect(isPowerOfThree(-(2 ** 31))).toBe(false);
    });
});
