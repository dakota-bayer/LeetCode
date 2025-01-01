import { subsetsWithDup } from './subsetsWithDup';

describe('subsetsWithDup', () => {
    it('should return the correct subsets for [1, 2, 2]', () => {
        const nums = [1, 2, 2];
        const result = subsetsWithDup(nums);
        const expected = [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]];
        expect(result).toEqual(expect.arrayContaining(expected));
        expect(result.length).toBe(expected.length);
    });

    it('should return the correct subsets for [0]', () => {
        const nums = [0];
        const result = subsetsWithDup(nums);
        const expected = [[], [0]];
        expect(result).toEqual(expect.arrayContaining(expected));
        expect(result.length).toBe(expected.length);
    });

    it('should return the correct subsets for an empty array []', () => {
        const nums: number[] = [];
        const result = subsetsWithDup(nums);
        const expected = [[]];
        expect(result).toEqual(expected);
    });

    it('should handle duplicate elements correctly', () => {
        const nums = [1, 1, 2];
        const result = subsetsWithDup(nums);
        const expected = [[], [1], [1, 1], [1, 2], [1, 1, 2], [2]];
        expect(result).toEqual(expect.arrayContaining(expected));
        expect(result.length).toBe(expected.length);
    });

    it('should handle all elements being the same', () => {
        const nums = [2, 2, 2];
        const result = subsetsWithDup(nums);
        const expected = [[], [2], [2, 2], [2, 2, 2]];
        expect(result).toEqual(expect.arrayContaining(expected));
        expect(result.length).toBe(expected.length);
    });

    it('should handle negative numbers', () => {
        const nums = [-1, 0, -1];
        const result = subsetsWithDup(nums);
        const expected = [[], [-1], [-1, -1], [-1, 0], [-1, -1, 0], [0]];
        expect(result).toEqual(expect.arrayContaining(expected));
        expect(result.length).toBe(expected.length);
    });
});
