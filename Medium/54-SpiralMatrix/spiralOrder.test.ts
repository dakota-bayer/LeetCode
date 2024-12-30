import { spiralOrder } from './spiralOrder';

describe('spiralOrder', () => {
    test('Example 1: 3x3 matrix', () => {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        const expected = [1, 2, 3, 6, 9, 8, 7, 4, 5];
        expect(spiralOrder(matrix)).toEqual(expected);
    });

    test('Example 2: 3x4 matrix', () => {
        const matrix = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
        ];
        const expected = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];
        expect(spiralOrder(matrix)).toEqual(expected);
    });

    test('Edge Case: Single row', () => {
        const matrix = [[1, 2, 3, 4]];
        const expected = [1, 2, 3, 4];
        expect(spiralOrder(matrix)).toEqual(expected);
    });

    test('Edge Case: Single column', () => {
        const matrix = [[1], [2], [3], [4]];
        const expected = [1, 2, 3, 4];
        expect(spiralOrder(matrix)).toEqual(expected);
    });

    test('Edge Case: 1x1 matrix', () => {
        const matrix = [[1]];
        const expected = [1];
        expect(spiralOrder(matrix)).toEqual(expected);
    });

    test('Edge Case: 2x2 matrix', () => {
        const matrix = [
            [1, 2],
            [3, 4],
        ];
        const expected = [1, 2, 4, 3];
        expect(spiralOrder(matrix)).toEqual(expected);
    });

    test('Edge Case: 3x1 matrix', () => {
        const matrix = [
            [1],
            [2],
            [3],
        ];
        const expected = [1, 2, 3];
        expect(spiralOrder(matrix)).toEqual(expected);
    });

    test('Edge Case: Empty matrix', () => {
        const matrix: number[][] = [];
        const expected: number[] = [];
        expect(spiralOrder(matrix)).toEqual(expected);
    });

    test('Edge Case: Matrix with negative numbers', () => {
        const matrix = [
            [-1, -2, -3],
            [-4, -5, -6],
            [-7, -8, -9],
        ];
        const expected = [-1, -2, -3, -6, -9, -8, -7, -4, -5];
        expect(spiralOrder(matrix)).toEqual(expected);
    });

    test('3x2 matrix', () => {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6]
        ];
        const expected = [1, 2, 3, 6, 5, 4];
        expect(spiralOrder(matrix)).toEqual(expected);
    });

    test('1x10 matrix', () => {
        const matrix = [
            [1],
            [2],
            [3],
            [4],
            [5],
            [6],
            [7],
            [8],
            [9],
            [10]
        ];
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(spiralOrder(matrix)).toEqual(expected);
    });

    test('large test', () => {
        const matrix = [
            [ 2,  3,  4], 
            [ 5,  6,  7], 
            [ 8,  9, 10], 
            [11, 12, 13], 
            [14, 15, 16]
        ];
        const expected = [2, 3, 4, 7, 10, 13, 16, 15, 14, 11, 8, 5, 6, 9, 12];
        expect(spiralOrder(matrix)).toEqual(expected);
    });
});
