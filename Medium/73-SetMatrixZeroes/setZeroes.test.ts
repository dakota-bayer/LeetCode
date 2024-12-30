import { setZeroes } from './setZeroes';

describe('setZeroes', () => {
    test('Example 1: Small matrix with one zero', () => {
        const matrix = [
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1],
        ];
        const expected = [
            [1, 0, 1],
            [0, 0, 0],
            [1, 0, 1],
        ];
        setZeroes(matrix);
        expect(matrix).toEqual(expected);
    });

    test('Example 2: Larger matrix with multiple zeroes', () => {
        const matrix = [
            [0, 1, 2, 0],
            [3, 4, 5, 2],
            [1, 3, 1, 5],
        ];
        const expected = [
            [0, 0, 0, 0],
            [0, 4, 5, 0],
            [0, 3, 1, 0],
        ];
        setZeroes(matrix);
        expect(matrix).toEqual(expected);
    });

    test('Edge Case: Single row with zero', () => {
        const matrix = [[1, 0, 3]];
        const expected = [[0, 0, 0]];
        setZeroes(matrix);
        expect(matrix).toEqual(expected);
    });

    test('Edge Case: Single column with zero', () => {
        const matrix = [[1], [0], [3]];
        const expected = [[0], [0], [0]];
        setZeroes(matrix);
        expect(matrix).toEqual(expected);
    });

    test('Edge Case: Matrix with no zeroes', () => {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        const expected = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        setZeroes(matrix);
        expect(matrix).toEqual(expected);
    });

    test('Edge Case: Matrix with all zeroes', () => {
        const matrix = [
            [0, 0],
            [0, 0],
        ];
        const expected = [
            [0, 0],
            [0, 0],
        ];
        setZeroes(matrix);
        expect(matrix).toEqual(expected);
    });

    test('Edge Case: 1x1 matrix with zero', () => {
        const matrix = [[0]];
        const expected = [[0]];
        setZeroes(matrix);
        expect(matrix).toEqual(expected);
    });

    test('Edge Case: 1x1 matrix without zero', () => {
        const matrix = [[1]];
        const expected = [[1]];
        setZeroes(matrix);
        expect(matrix).toEqual(expected);
    });

    test('Edge Case: Large matrix with scattered zeroes', () => {
        const matrix = [
            [1, 2, 0],
            [4, 0, 6],
            [7, 8, 9],
        ];
        const expected = [
            [0, 0, 0],
            [0, 0, 0],
            [7, 0, 0],
        ];
        setZeroes(matrix);
        expect(matrix).toEqual(expected);
    });
});
