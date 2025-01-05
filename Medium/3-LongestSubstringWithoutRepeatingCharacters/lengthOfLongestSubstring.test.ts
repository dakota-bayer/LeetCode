import { lengthOfLongestSubstring } from './lengthOfLongestSubstring';

describe('lengthOfLongestSubstring', () => {
    test('Example 1: Regular input with repeating characters', () => {
        const s = "abcabcbb";
        expect(lengthOfLongestSubstring(s)).toBe(3); // "abc"
    });

    test('Example 2: All identical characters', () => {
        const s = "bbbbb";
        expect(lengthOfLongestSubstring(s)).toBe(1); // "b"
    });

    test('Example 3: Mixed repeating and non-repeating characters', () => {
        const s = "pwwkew";
        expect(lengthOfLongestSubstring(s)).toBe(3); // "wke"
    });

    test('Edge Case: Empty string', () => {
        const s = "";
        expect(lengthOfLongestSubstring(s)).toBe(0); // No substring
    });

    test('Edge Case: String with all unique characters', () => {
        const s = "abcdef";
        expect(lengthOfLongestSubstring(s)).toBe(6); // "abcdef"
    });

    test('Edge Case: Single character string', () => {
        const s = "a";
        expect(lengthOfLongestSubstring(s)).toBe(1); // "a"
    });
    /*
        test('Edge Case: String with spaces and symbols', () => {
            const s = "a b c!d@";
            expect(lengthOfLongestSubstring(s)).toBe(8); // "a b c!d@"
        });
    */
    test('Edge Case: String with overlapping repeating characters', () => {
        const s = "aab";
        expect(lengthOfLongestSubstring(s)).toBe(2); // "ab"
    });

    test('Edge Case: Long string with no repeating characters', () => {
        const s = "abcdefghijklmnopqrstuvwxyz";
        expect(lengthOfLongestSubstring(s)).toBe(26); // Full length
    });

    test('Edge Case: Long string with many repeats', () => {
        const s = "a".repeat(50000);
        expect(lengthOfLongestSubstring(s)).toBe(1); // "a"
    });

    test('Edge Case: Long string with alternating patterns', () => {
        const s = "ab" + "cd".repeat(24999);
        expect(lengthOfLongestSubstring(s)).toBe(4); // "abcd"
    });

    test('failing on leetcode - dvdf', () => {
        const s = "dvdf";
        expect(lengthOfLongestSubstring(s)).toBe(3);
    });
});
