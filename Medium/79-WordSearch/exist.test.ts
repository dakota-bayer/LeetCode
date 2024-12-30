import { exist } from './exist';

describe('exist', () => {
    test('Example 1: Word found in grid', () => {
        const board = [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"],
        ];
        const word = "ABCCED";
        expect(exist(board, word)).toBe(true);
    });

    test('Example 2: Word found in grid', () => {
        const board = [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"],
        ];
        const word = "SEE";
        expect(exist(board, word)).toBe(true);
    });

    test('Example 3: Word not found in grid', () => {
        const board = [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"],
        ];
        const word = "ABCB";
        expect(exist(board, word)).toBe(false);
    });

    test('Edge Case: Single letter grid, word matches', () => {
        const board = [["A"]];
        const word = "A";
        expect(exist(board, word)).toBe(true);
    });

    test('Edge Case: Single letter grid, word does not match', () => {
        const board = [["A"]];
        const word = "B";
        expect(exist(board, word)).toBe(false);
    });

    test('Edge Case: Word longer than grid', () => {
        const board = [
            ["A", "B"],
            ["C", "D"],
        ];
        const word = "ABCDE";
        expect(exist(board, word)).toBe(false);
    });

    test('Complex Case: Word wraps around in grid but not allowed', () => {
        const board = [
            ["A", "B", "C"],
            ["D", "E", "F"],
            ["G", "H", "I"],
        ];
        const word = "ABFE";
        expect(exist(board, word)).toBe(false);
    });

    test('Case Sensitivity: Word not found due to case mismatch', () => {
        const board = [
            ["a", "b", "c"],
            ["d", "e", "f"],
            ["g", "h", "i"],
        ];
        const word = "ABC";
        expect(exist(board, word)).toBe(false);
    });
});
