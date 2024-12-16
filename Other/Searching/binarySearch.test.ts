import { binarySearch } from './binarySearch';

describe('binarySearch', () => {
    test('finds the target in a sorted array', () => {
        const array = [1, 3, 5, 7, 9, 11];
        expect(binarySearch(array, 5)).toBe(2); // Index of 5
        expect(binarySearch(array, 11)).toBe(5); // Index of 11
    });

    test('returns -1 for a target not in the array', () => {
        const array = [1, 3, 5, 7, 9, 11];
        expect(binarySearch(array, 4)).toBe(-1); // 4 is not in the array
        expect(binarySearch(array, 12)).toBe(-1); // 12 is not in the array
    });

    test('works with an empty array', () => {
        const array: number[] = [];
        expect(binarySearch(array, 1)).toBe(-1); // No elements to search
    });

    test('works with a single-element array', () => {
        const array = [5];
        expect(binarySearch(array, 5)).toBe(0); // Target matches single element
        expect(binarySearch(array, 3)).toBe(-1); // Target does not match
    });

    test('works with negative numbers in the array', () => {
        const array = [-10, -5, 0, 5, 10];
        expect(binarySearch(array, -5)).toBe(1); // Index of -5
        expect(binarySearch(array, 0)).toBe(2); // Index of 0
        expect(binarySearch(array, 15)).toBe(-1); // 15 is not in the array
    });

    test('finds the target at the edges of the array', () => {
        const array = [1, 2, 3, 4, 5];
        expect(binarySearch(array, 1)).toBe(0); // First element
        expect(binarySearch(array, 5)).toBe(4); // Last element
    });
});
