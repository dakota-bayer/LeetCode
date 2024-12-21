import { isAnagram } from './isAnagram';

describe('isAnagram', () => {
    test('should return true for valid anagram (example 1)', () => {
        expect(isAnagram('anagram', 'nagaram')).toBe(true);
    });

    test('should return false for non-anagram strings (example 2)', () => {
        expect(isAnagram('rat', 'car')).toBe(false);
    });

    test('should return false for strings of different lengths', () => {
        expect(isAnagram('abc', 'ab')).toBe(false);
    });

    test('should return true for empty strings', () => {
        expect(isAnagram('', '')).toBe(true);
    });

    test('should return false for single-character mismatched strings', () => {
        expect(isAnagram('a', 'b')).toBe(false);
    });

    test('should return true for single-character matching strings', () => {
        expect(isAnagram('a', 'a')).toBe(true);
    });

    test('should return true for strings with repeated characters forming an anagram', () => {
        expect(isAnagram('aabbcc', 'ccbbaa')).toBe(true);
    });

    test('should return false for strings with repeated characters not forming an anagram', () => {
        expect(isAnagram('aabbcc', 'aabbc')).toBe(false);
    });

    test('should return true for Unicode character anagrams', () => {
        expect(isAnagram('你好', '好你')).toBe(true);
    });

    test('should return false for non-anagram Unicode characters', () => {
        expect(isAnagram('你好', '你坏')).toBe(false);
    });

    test('should handle large inputs efficiently', () => {
        const s = 'a'.repeat(50000) + 'b';
        const t = 'b' + 'a'.repeat(50000);
        expect(isAnagram(s, t)).toBe(true);
    });
});
