import { permute } from './permute';

describe('permute', () => {
    test('should return all permutations for [1,2,3]', () => {
        const nums = [1, 2, 3];
        const expected = [
            [1, 2, 3], [1, 3, 2],
            [2, 1, 3], [2, 3, 1],
            [3, 1, 2], [3, 2, 1]
        ];
        const result = permute(nums);
        expect(result.sort()).toEqual(expected.sort());
    });

    test('should return all permutations for [0,1]', () => {
        const nums = [0, 1];
        const expected = [
            [0, 1], [1, 0]
        ];
        const result = permute(nums);
        expect(result.sort()).toEqual(expected.sort());
    });

    test('should return all permutations for [1]', () => {
        const nums = [1];
        const expected = [
            [1]
        ];
        const result = permute(nums);
        expect(result).toEqual(expected);
    });

    test('should return all permutations for an array of negative numbers', () => {
        const nums = [-1, -2];
        const expected = [
            [-1, -2], [-2, -1]
        ];
        const result = permute(nums);
        expect(result.sort()).toEqual(expected.sort());
    });

    test('should return all permutations for an array of mixed numbers', () => {
        const nums = [-1, 0, 1];
        const expected = [
            [-1, 0, 1], [-1, 1, 0],
            [0, -1, 1], [0, 1, -1],
            [1, -1, 0], [1, 0, -1]
        ];
        const result = permute(nums);
        expect(result.sort()).toEqual(expected.sort());
    });

    test('should handle an empty array', () => {
        const nums: number[] = [];
        const expected: number[][] = [];
        const result = permute(nums);
        expect(result).toEqual(expected);
    });
});
