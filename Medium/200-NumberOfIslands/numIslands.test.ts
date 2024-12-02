import { numIslands } from './numIslands';

describe('numIslands', () => {
    test('Example 1: Single large island', () => {
        const grid = [
            ["1", "1", "1", "1", "0"],
            ["1", "1", "0", "1", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "0", "0", "0"]
        ];
        expect(numIslands(grid)).toBe(1);
    });

    test('Example 2: Multiple small islands', () => {
        const grid = [
            ["1", "1", "0", "0", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "1", "0", "0"],
            ["0", "0", "0", "1", "1"]
        ];
        expect(numIslands(grid)).toBe(3);
    });

    test('Edge case: Empty grid', () => {
        const grid: string[][] = [];
        expect(numIslands(grid)).toBe(0);
    });

    test('Edge case: Single cell island', () => {
        const grid = [["1"]];
        expect(numIslands(grid)).toBe(1);
    });

    test('Edge case: Single cell water', () => {
        const grid = [["0"]];
        expect(numIslands(grid)).toBe(0);
    });

    test('Edge case: Multiple rows but no islands', () => {
        const grid = [
            ["0", "0", "0"],
            ["0", "0", "0"],
            ["0", "0", "0"]
        ];
        expect(numIslands(grid)).toBe(0);
    });

    test('Edge case: Islands with complex shapes', () => {
        const grid = [
            ["1", "0", "1", "0", "1"],
            ["0", "1", "0", "1", "0"],
            ["1", "0", "1", "0", "1"]
        ];
        expect(numIslands(grid)).toBe(8);
    });

    test('Edge case: Large single island with mixed boundaries', () => {
        const grid = [
            ["1", "1", "0", "1", "1"],
            ["1", "0", "0", "0", "1"],
            ["1", "1", "1", "1", "1"]
        ];
        expect(numIslands(grid)).toBe(1);
    });
});
