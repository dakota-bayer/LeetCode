import { fib } from './fib';

describe('fib', () => {
    test('should return 0 for F(0)', () => {
        expect(fib(0)).toBe(0);
    });

    test('should return 1 for F(1)', () => {
        expect(fib(1)).toBe(1);
    });

    test('should return 1 for F(2)', () => {
        expect(fib(2)).toBe(1);
    });

    test('should return 2 for F(3)', () => {
        expect(fib(3)).toBe(2);
    });

    test('should return 3 for F(4)', () => {
        expect(fib(4)).toBe(3);
    });

    test('should return 5 for F(5)', () => {
        expect(fib(5)).toBe(5);
    });

    test('should return 21 for F(8)', () => {
        expect(fib(8)).toBe(21);
    });

    test('should handle edge cases for constraints', () => {
        expect(fib(0)).toBe(0); // Minimum constraint
        expect(fib(30)).toBe(832040); // Maximum constraint
    });

    test('should return correct value for mid-range inputs', () => {
        expect(fib(10)).toBe(55);
        expect(fib(15)).toBe(610);
    });
});
