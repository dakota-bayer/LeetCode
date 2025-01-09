import { kthCharacter } from './kthCharacter'; // Replace with the actual module name

describe('kthCharacter', () => {
    test('should return "b" for k = 5', () => {
        expect(kthCharacter(5)).toBe('b');
    });

    test('should return "c" for k = 10', () => {
        expect(kthCharacter(10)).toBe('c');
    });

    test('should return "a" for k = 1', () => {
        expect(kthCharacter(1)).toBe('a');
    });

    test('should return "c" for k = 6', () => {
        // a
        // ab
        // abbc
        // abbcbccd
        expect(kthCharacter(6)).toBe('c');
    });

    test('should return "d" for k = 15', () => {
        // a
        // a b
        // ab bc
        // abbc bccd
        // abbcbccd cccdcdde
        expect(kthCharacter(15)).toBe('d');
    });

    test('should handle edge cases for maximum k', () => {
        expect(kthCharacter(500)).toBeDefined(); // Ensures no error is thrown
    });
});
