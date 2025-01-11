import { isPowerOfFour } from './isPowerOfFour';

describe('isPowerOfFour', () => {
    test('should return true for 16', () => {
        expect(isPowerOfFour(16)).toBe(true); // 16 = 4^2
    });

    test('should return false for 5', () => {
        expect(isPowerOfFour(5)).toBe(false);
    });

    test('should return true for 1', () => {
        expect(isPowerOfFour(1)).toBe(true); // 1 = 4^0
    });

    test('should return true for 4', () => {
        expect(isPowerOfFour(4)).toBe(true); // 4 = 4^1
    });

    test('should return false for 0', () => {
        expect(isPowerOfFour(0)).toBe(false); // 0 is not a power of 4
    });

    test('should return false for -4', () => {
        expect(isPowerOfFour(-4)).toBe(false); // Negative numbers are not powers of 4
    });

    test('should return true for 64', () => {
        expect(isPowerOfFour(64)).toBe(true); // 64 = 4^3
    });

    test('should return false for 8', () => {
        expect(isPowerOfFour(8)).toBe(false); // 8 is not a power of 4
    });

    test('should return false for a large number that is not a power of 4', () => {
        expect(isPowerOfFour(10_000_000)).toBe(false);
    });

    test('should return true for the maximum power of 4 within constraints', () => {
        expect(isPowerOfFour(Math.pow(4, 15))).toBe(true); // 4^15
    });
});
