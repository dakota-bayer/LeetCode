import { maxProfit } from './maxProfit';

describe('maxProfit', () => {
    test('should return the maximum profit for a valid case', () => {
        const prices = [7, 1, 5, 3, 6, 4];
        const result = maxProfit(prices);
        expect(result).toBe(5); // Buy at 1, sell at 6
    });

    test('should return 0 when no profit is possible', () => {
        const prices = [7, 6, 4, 3, 1];
        const result = maxProfit(prices);
        expect(result).toBe(0); // No transactions result in profit
    });

    test('should handle a single day price list', () => {
        const prices = [5];
        const result = maxProfit(prices);
        expect(result).toBe(0); // No transactions possible
    });

    test('should handle two days with increasing prices', () => {
        const prices = [1, 2];
        const result = maxProfit(prices);
        expect(result).toBe(1); // Buy at 1, sell at 2
    });

    test('should handle two days with decreasing prices', () => {
        const prices = [2, 1];
        const result = maxProfit(prices);
        expect(result).toBe(0); // No profit possible
    });

    test('should handle an array with the same prices throughout', () => {
        const prices = [3, 3, 3, 3];
        const result = maxProfit(prices);
        expect(result).toBe(0); // No profit possible
    });

    test('should handle large input arrays efficiently', () => {
        const prices = Array.from({ length: 100000 }, (_, i) => i + 1); // [1, 2, 3, ..., 100000]
        const result = maxProfit(prices);
        expect(result).toBe(99999); // Buy at 1, sell at 100000
    });

    test('should handle edge cases with zeros', () => {
        const prices = [0, 0, 0, 0];
        const result = maxProfit(prices);
        expect(result).toBe(0); // No profit possible
    });
});
