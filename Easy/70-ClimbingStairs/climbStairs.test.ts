import { climbStairs } from './climbStairs'; // Replace with the correct file path

describe('climbStairs', () => {
    test('returns the correct number of ways for n = 2 (example 1)', () => {
        expect(climbStairs(2)).toBe(2);
    });

    test('returns the correct number of ways for n = 3 (example 2)', () => {
        expect(climbStairs(3)).toBe(3);
    });

    test('returns the correct number of ways for n = 1 (smallest case)', () => {
        expect(climbStairs(1)).toBe(1);
    });

    test('returns the correct number of ways for n = 4', () => {
        expect(climbStairs(4)).toBe(5);
        // Explanation:
        // 1. 1 step + 1 step + 1 step + 1 step
        // 2. 1 step + 1 step + 2 steps
        // 3. 1 step + 2 steps + 1 step
        // 4. 2 steps + 1 step + 1 step
        // 5. 2 steps + 2 steps
    });

    test('returns the correct number of ways for n = 5', () => {
        expect(climbStairs(5)).toBe(8);
        // Explanation:
        // This follows the Fibonacci sequence: 8 distinct ways.
    });

    test('returns the correct number of ways for n = 10', () => {
        expect(climbStairs(10)).toBe(89);
        // Explanation:
        // Fibonacci sequence value at position 10.
    });

    test('handles the maximum constraint of n = 45', () => {
        expect(climbStairs(45)).toBe(1836311903);
        // Explanation:
        // Fibonacci sequence value at position 45.
    });
});
