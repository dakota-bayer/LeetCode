import { numSquares } from './numSquares'; // Adjust the path as needed

describe('numSquares', () => {
    test('Example 1: n = 12', () => {
        expect(numSquares(12)).toBe(3); // 12 = 4 + 4 + 4
    });

    test('Example 2: n = 13', () => {
        expect(numSquares(13)).toBe(2); // 13 = 4 + 9
    });

    test('Edge Case: n = 1 (smallest possible n)', () => {
        expect(numSquares(1)).toBe(1); // 1 = 1
    });

    test('Edge Case: n = 2 (small sum)', () => {
        expect(numSquares(2)).toBe(2); // 2 = 1 + 1
    });

    test('Edge Case: n = 3', () => {
        expect(numSquares(3)).toBe(3); // 3 = 1 + 1 + 1
    });

    test('Edge Case: n = 4 (perfect square)', () => {
        expect(numSquares(4)).toBe(1); // 4 = 4
    });

    test('General Case: n = 17', () => {
        expect(numSquares(17)).toBe(2); // 17 = 16 + 1
    });

    test('General Case: n = 23', () => {
        expect(numSquares(23)).toBe(4); // 23 = 9 + 9 + 4 + 1
    });

    test('General Case: n = 99', () => {
        expect(numSquares(99)).toBe(3); // 99 = 81 + 9 + 9
    });

    test('Large Case: n = 100 (perfect square)', () => {
        expect(numSquares(100)).toBe(1); // 100 = 100
    });

    test('Large Case: n = 10000 (largest possible n)', () => {
        expect(numSquares(10000)).toBe(1); // 10000 = 10000
    });
});
