import { subsets } from './subsets';

describe('subsets', () => {
    test('Example 1: Three elements', () => {
        const nums = [1, 2, 3];
        const expected = [
            [],
            [1],
            [2],
            [1, 2],
            [3],
            [1, 3],
            [2, 3],
            [1, 2, 3]
        ];
        expect(subsets(nums).sort()).toEqual(expected.sort());
    });

    test('Example 2: Single element', () => {
        const nums = [0];
        const expected = [
            [],
            [0]
        ];
        expect(subsets(nums).sort()).toEqual(expected.sort());
    });

    test('Edge Case: Empty array', () => {
        const nums: number[] = [];
        const expected = [
            []
        ];
        expect(subsets(nums).sort()).toEqual(expected.sort());
    });

    test('Negative and positive numbers', () => {
        const nums = [-1, 0, 1];
        const expected = [
            [],
            [-1],
            [0],
            [-1, 0],
            [1],
            [-1, 1],
            [0, 1],
            [-1, 0, 1]
        ];
        expect(subsets(nums).sort()).toEqual(expected.sort());
    });

    test('Two elements', () => {
        const nums = [5, 10];
        const expected = [
            [],
            [5],
            [10],
            [5, 10]
        ];
        expect(subsets(nums).sort()).toEqual(expected.sort());
    });

    test('Edge Case: Larger array', () => {
        const nums = [1, 2, 3, 4];
        const result = subsets(nums);
        const expectedLength = Math.pow(2, nums.length); // 2^n subsets
        expect(result.length).toBe(expectedLength);
        result.forEach((subset) => {
            expect(subset.every((num) => nums.includes(num))).toBe(true);
        });
    });
});
