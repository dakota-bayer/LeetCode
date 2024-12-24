import { canConstruct } from './canConstruct';

describe("Ransom Note", () => {
    test("Example 1: ransomNote = 'a', magazine = 'b'", () => {
        expect(canConstruct("a", "b")).toBe(false);
    });

    test("Example 2: ransomNote = 'aa', magazine = 'ab'", () => {
        expect(canConstruct("aa", "ab")).toBe(false);
    });

    test("Example 3: ransomNote = 'aa', magazine = 'aab'", () => {
        expect(canConstruct("aa", "aab")).toBe(true);
    });

    test("Edge Case: ransomNote = '', magazine = ''", () => {
        expect(canConstruct("", "")).toBe(true); // Empty ransom note can always be constructed
    });

    test("Edge Case: ransomNote = 'a', magazine = ''", () => {
        expect(canConstruct("a", "")).toBe(false); // Ransom note cannot be constructed
    });

    test("Edge Case: ransomNote = '', magazine = 'abc'", () => {
        expect(canConstruct("", "abc")).toBe(true); // Empty ransom note can always be constructed
    });

    test("Edge Case: ransomNote = 'abc', magazine = 'aabbcc'", () => {
        expect(canConstruct("abc", "aabbcc")).toBe(true);
    });

    test("Performance Test: ransomNote = 'a'.repeat(100000), magazine = 'a'.repeat(100000)", () => {
        const ransomNote = 'a'.repeat(100000);
        const magazine = 'a'.repeat(100000);
        expect(canConstruct(ransomNote, magazine)).toBe(true);
    });

    test("Performance Test: ransomNote = 'a'.repeat(100000), magazine = 'a'.repeat(99999)", () => {
        const ransomNote = 'a'.repeat(100000);
        const magazine = 'a'.repeat(99999);
        expect(canConstruct(ransomNote, magazine)).toBe(false);
    });
});
