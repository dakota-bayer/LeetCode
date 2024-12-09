import { describe, test, expect } from '@jest/globals';
import { countBits } from './countBits';

describe("countBits", () => {
    test("Example case 1", () => {
        expect(countBits(2)).toEqual([0, 1, 1]); // 0 -> 0, 1 -> 1, 2 -> 10
    });

    test("Example case 2", () => {
        expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
        // 0 -> 0, 1 -> 1, 2 -> 10, 3 -> 11, 4 -> 100, 5 -> 101
    });

    test("Edge case: n = 0", () => {
        expect(countBits(0)).toEqual([0]); // Only one number, 0 -> 0
    });

    test("Edge case: n = 1", () => {
        expect(countBits(1)).toEqual([0, 1]); // 0 -> 0, 1 -> 1
    });

    test("Larger input", () => {
        expect(countBits(10)).toEqual([0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2]);
        // 0 -> 0, 1 -> 1, 2 -> 10, ..., 10 -> 1010
    });

    test("Performance test: n = 100,000", () => {
        const result = countBits(100000);
        expect(result.length).toBe(100001); // Ensure correct length
        expect(result[100000]).toBeGreaterThan(0); // Verify the largest index is computed
    });
});
