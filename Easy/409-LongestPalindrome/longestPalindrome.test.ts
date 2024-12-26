import { longestPalindrome } from './longestPalindrome';

describe('longestPalindrome', () => {
    it('should return the correct length for a string with even frequency of characters', () => {
        expect(longestPalindrome('abccccdd')).toBe(7);
    });

    it('should return the length of the string if all characters have even frequencies', () => {
        expect(longestPalindrome('aabbcc')).toBe(6);
    });

    it('should return the correct length for a string with all unique characters', () => {
        expect(longestPalindrome('abcdef')).toBe(1);
    });

    it('should return the correct length for a string with one character', () => {
        expect(longestPalindrome('a')).toBe(1);
    });

    it('should handle a string with mixed case characters', () => {
        expect(longestPalindrome('Aa')).toBe(1);
    });

    it('should handle a string with all identical characters', () => {
        expect(longestPalindrome('aaaa')).toBe(4);
    });

    it('should handle an empty string', () => {
        expect(longestPalindrome('')).toBe(0);
    });

    it('should handle the longest possible string within the constraints', () => {
        const longString = 'a'.repeat(2000);
        expect(longestPalindrome(longString)).toBe(2000);
    });

    it('should handle a string with odd frequencies for multiple characters', () => {
        expect(longestPalindrome('aaaabbbbccc')).toBe(11);
    });
});
