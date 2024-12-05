import { isValid } from './isValid';

describe('isValid', () => {
    test('returns true for simple valid parentheses', () => {
        expect(isValid('()')).toBe(true);
    });

    test('returns true for multiple types of valid parentheses', () => {
        expect(isValid('()[]{}')).toBe(true);
    });

    test('returns false for mismatched parentheses', () => {
        expect(isValid('(]')).toBe(false);
    });

    test('returns true for nested valid parentheses', () => {
        expect(isValid('([])')).toBe(true);
    });

    test('returns false for unbalanced parentheses', () => {
        expect(isValid('([)]')).toBe(false);
    });

    test('returns false for single open parenthesis', () => {
        expect(isValid('(')).toBe(false);
    });

    test('returns false for single closing parenthesis', () => {
        expect(isValid(')')).toBe(false);
    });

    test('returns true for empty string', () => {
        expect(isValid('')).toBe(true);
    });

    test('returns true for long valid sequence', () => {
        const input = '()[]{}' + '([])' + '{[()]}'.repeat(1000);
        expect(isValid(input)).toBe(true);
    });

    test('returns false for long invalid sequence', () => {
        const input = '()[]{}' + '([])' + '{[()]})'.repeat(999) + '}';
        expect(isValid(input)).toBe(false);
    });
});
