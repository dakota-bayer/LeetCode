import { rotate } from './rotate';

describe('rotate', () => {
    test('Example 1: 3x3 matrix', () => {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        const expected = [
            [7, 4, 1],
            [8, 5, 2],
            [9, 6, 3],
        ];
        rotate(matrix);
        expect(matrix).toEqual(expected);
    });

    test('Example 2: 4x4 matrix', () => {
        const matrix = [
            [5, 1, 9, 11],
            [2, 4, 8, 10],
            [13, 3, 6, 7],
            [15, 14, 12, 16],
        ];
        const expected = [
            [15, 13, 2, 5],
            [14, 3, 4, 1],
            [12, 6, 8, 9],
            [16, 7, 10, 11],
        ];
        rotate(matrix);
        expect(matrix).toEqual(expected);
    });

    test('Edge Case: 1x1 matrix', () => {
        const matrix = [[1]];
        const expected = [[1]];
        rotate(matrix);
        expect(matrix).toEqual(expected);
    });

    test('Edge Case: 2x2 matrix', () => {
        const matrix = [
            [1, 2],
            [3, 4],
        ];
        const expected = [
            [3, 1],
            [4, 2],
        ];
        rotate(matrix);
        expect(matrix).toEqual(expected);
    });

    test('Edge Case: Negative numbers', () => {
        const matrix = [
            [-1, -2, -3],
            [-4, -5, -6],
            [-7, -8, -9],
        ];
        const expected = [
            [-7, -4, -1],
            [-8, -5, -2],
            [-9, -6, -3],
        ];
        rotate(matrix);
        expect(matrix).toEqual(expected);
    });

    test('Edge Case: Large numbers', () => {
        const matrix = [
            [1000, 2000, 3000],
            [4000, 5000, 6000],
            [7000, 8000, 9000],
        ];
        const expected = [
            [7000, 4000, 1000],
            [8000, 5000, 2000],
            [9000, 6000, 3000],
        ];
        rotate(matrix);
        expect(matrix).toEqual(expected);
    });
});
