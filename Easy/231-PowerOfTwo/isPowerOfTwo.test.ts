import { isPowerOfTwo } from './isPowerOfTwo';

describe('isPowerOfTwo', () => {
    test('Example 1: n = 1', () => {
        const n = 1;
        const result = isPowerOfTwo(n);
        expect(result).toBe(true); // 2^0 = 1
    });

    test('Example 2: n = 16', () => {
        const n = 16;
        const result = isPowerOfTwo(n);
        expect(result).toBe(true); // 2^4 = 16
    });

    test('Example 3: n = 3', () => {
        const n = 3;
        const result = isPowerOfTwo(n);
        expect(result).toBe(false); // Not a power of two
    });

    test('Edge case: n = 0', () => {
        const n = 0;
        const result = isPowerOfTwo(n);
        expect(result).toBe(false); // 0 is not a power of two
    });

    test('Edge case: n = -1', () => {
        const n = -1;
        const result = isPowerOfTwo(n);
        expect(result).toBe(false); // Negative numbers are not powers of two
    });

    test('Large power of two: n = 2^30', () => {
        const n = Math.pow(2, 30);
        const result = isPowerOfTwo(n);
        expect(result).toBe(true);
    });

    test('Large non-power of two: n = 2^30 + 1', () => {
        const n = Math.pow(2, 30) + 1;
        const result = isPowerOfTwo(n);
        expect(result).toBe(false);
    });

    test('Negative power of two: n = -16', () => {
        const n = -16;
        const result = isPowerOfTwo(n);
        expect(result).toBe(false); // Negative numbers cannot be powers of two
    });
});
