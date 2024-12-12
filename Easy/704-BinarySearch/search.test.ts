import { search } from './search';

describe('search', () => {
    test('returns -1 when value not found in populated array', () => {
        const result = search([1, 2, 3, 4, 5], 10);
        expect(result).toBe(-1);
    });

    test('returns -1 when value not found in empty array', () => {
        const result = search([], 10);
        expect(result).toBe(-1);
    });

    test('returns 0 when value found in beginning', () => {
        const result = search([1, 2, 3, 4, 5], 1);
        expect(result).toBe(0);
    });

    test('returns last index when value found at end', () => {
        const result = search([1, 2, 3, 4, 5], 5);
        expect(result).toBe(4);
    });

    test('returns correct index when value found in middle', () => {
        const result = search([1, 2, 3, 4, 5], 3);
        expect(result).toBe(2);
    });

    test('returns 0 when value is the only item in list', () => {
        const result = search([1], 1);
        expect(result).toBe(0);
    });

    test('returns proper index with only two items in the list', () => {
        const result = search([1, 2], 2);
        expect(result).toBe(1);
    });
});