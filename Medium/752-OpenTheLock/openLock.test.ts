import { openLock } from './openLock';

describe('openLock', () => {
    test('Example 1: Normal scenario with valid path', () => {
        const deadends = ["0201", "0101", "0102", "1212", "2002"];
        const target = "0202";
        expect(openLock(deadends, target)).toBe(6);
    });

    test('Example 2: Single move to target', () => {
        const deadends = ["8888"];
        const target = "0009";
        expect(openLock(deadends, target)).toBe(1);
    });

    test('Example 3: Target is blocked by deadends', () => {
        const deadends = ["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"];
        const target = "8888";
        expect(openLock(deadends, target)).toBe(-1);
    });

    test('Edge Case: Starting point is a deadend', () => {
        const deadends = ["0000"];
        const target = "8888";
        expect(openLock(deadends, target)).toBe(-1);
    });

    test('Edge Case: Target is the starting point', () => {
        const deadends = ["8888"];
        const target = "0000";
        expect(openLock(deadends, target)).toBe(0);
    });

    test('Edge Case: No deadends and short path to target', () => {
        const deadends: string[] = [];
        const target = "0001";
        expect(openLock(deadends, target)).toBe(1);
    });

    test('Edge Case: No deadends and longer path to target', () => {
        const deadends: string[] = [];
        const target = "0900";
        expect(openLock(deadends, target)).toBe(1);
    });

    test('Edge Case: No possible moves (all states are deadends)', () => {
        const deadends = Array.from({ length: 10000 }, (_, i) => `${i.toString().padStart(4, '0')}`);
        const target = "0001";
        expect(openLock(deadends, target)).toBe(-1);
    });
});
