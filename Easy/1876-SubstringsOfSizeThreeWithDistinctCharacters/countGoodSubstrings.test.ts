import { countGoodSubstrings } from './countGoodSubstrings';

describe('countGoodSubstrings', () => {
    test('Example 1: Single good substring', () => {
        const s = "xyzzaz";
        expect(countGoodSubstrings(s)).toBe(1);
    });

    test('Example 2: Multiple good substrings', () => {
        const s = "aababcabc";
        expect(countGoodSubstrings(s)).toBe(4);
    });

    test('Edge Case: Short string with no substrings', () => {
        const s = "ab";
        expect(countGoodSubstrings(s)).toBe(0);
    });

    test('Edge Case: String with all distinct characters', () => {
        const s = "abcdef";
        expect(countGoodSubstrings(s)).toBe(4); // "abc", "bcd", "cde", "def"
    });

    test('Edge Case: String with repeated characters', () => {
        const s = "aaaaa";
        expect(countGoodSubstrings(s)).toBe(0); // No good substrings
    });

    test('Edge Case: String with alternating characters', () => {
        const s = "abababab";
        expect(countGoodSubstrings(s)).toBe(0); // "aba", "bab", "aba", "bab", "aba", "bab" - all have a matching letter
    });

    test('Edge Case: Entire string is one repeating character', () => {
        const s = "zzz";
        expect(countGoodSubstrings(s)).toBe(0); // No good substrings
    });

    test('Edge Case: All distinct characters in a small window', () => {
        const s = "abc";
        expect(countGoodSubstrings(s)).toBe(1); // "abc" is good
    });

    test('Edge Case: Single character string', () => {
        const s = "a";
        expect(countGoodSubstrings(s)).toBe(0); // No substrings of size 3
    });
});
