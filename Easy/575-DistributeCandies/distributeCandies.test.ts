import { distributeCandies } from './distributeCandies'; // Adjust the import path as needed

describe('distributeCandies', () => {
    test('should return the correct maximum number of different types for example 1', () => {
        const candyType = [1, 1, 2, 2, 3, 3];
        const result = distributeCandies(candyType);
        expect(result).toBe(3);
    });

    test('should return the correct maximum number of different types for example 2', () => {
        const candyType = [1, 1, 2, 3];
        const result = distributeCandies(candyType);
        expect(result).toBe(2);
    });

    test('should return the correct maximum number of different types for example 3', () => {
        const candyType = [6, 6, 6, 6];
        const result = distributeCandies(candyType);
        expect(result).toBe(1);
    });

    test('should handle the case where there are more unique types than n/2', () => {
        const candyType = [1, 2, 3, 4, 5, 6, 7, 8];
        const result = distributeCandies(candyType);
        expect(result).toBe(4); // n/2 = 4
    });

    test('should handle the case where all candies are of the same type', () => {
        const candyType = [7, 7, 7, 7, 7, 7];
        const result = distributeCandies(candyType);
        expect(result).toBe(1);
    });

    test('should handle the minimum input size', () => {
        const candyType = [1, 2];
        const result = distributeCandies(candyType);
        expect(result).toBe(1); // n/2 = 1
    });

    test('should handle the case where there are exactly n/2 unique types', () => {
        const candyType = [1, 2, 3, 4, 1, 2, 3, 4];
        const result = distributeCandies(candyType);
        expect(result).toBe(4); // n/2 = 4
    });

    test('should handle negative candy types', () => {
        const candyType = [-1, -1, -2, -3, -3, -2];
        const result = distributeCandies(candyType);
        expect(result).toBe(3); // n/2 = 3
    });

    test('should handle large inputs', () => {
        const candyType = Array(10000).fill(1).map((_, i) => i % 5000);
        const result = distributeCandies(candyType);
        expect(result).toBe(5000); // n/2 = 5000
    });
});
