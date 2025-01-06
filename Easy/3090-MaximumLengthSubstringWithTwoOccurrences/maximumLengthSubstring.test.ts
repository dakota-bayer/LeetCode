import { maximumLengthSubstring } from './maximumLengthSubstring';

describe('maximumLengthSubstring', () => {
    test('Example 1: Input with multiple characters having at most two occurrences', () => {
        const input = 'bcbbbcba';
        const output = 4; // "bcba" satisfies the condition.
        expect(maximumLengthSubstring(input)).toBe(output);
    });

    test('Example 2: Input with repeated characters exceeding two occurrences', () => {
        const input = 'aaaa';
        const output = 2; // "aa" is the longest valid substring.
        expect(maximumLengthSubstring(input)).toBe(output);
    });

    test('Edge Case: Input with minimum length of 2', () => {
        const input = 'ab';
        const output = 2; // The entire string is valid.
        expect(maximumLengthSubstring(input)).toBe(output);
    });

    test('Edge Case: Input with alternating characters', () => {
        const input = 'abababab';
        const output = 4; // "abab" is the longest
        expect(maximumLengthSubstring(input)).toBe(output);
    });

    test('Input with multiple characters exceeding two occurrences', () => {
        const input = 'aabbbcccc';
        const output = 4; // "aabb" is the longest valid substring.
        expect(maximumLengthSubstring(input)).toBe(output);
    });

    test('Input with no repeating characters', () => {
        const input = 'abcdef';
        const output = 6; // The entire string is valid.
        expect(maximumLengthSubstring(input)).toBe(output);
    });

    test('Input with all characters being the same', () => {
        const input = 'aaaaaa';
        const output = 2; // "aa" is the longest valid substring.
        expect(maximumLengthSubstring(input)).toBe(output);
    });

    test('Input with overlapping valid substrings', () => {
        const input = 'abcabcabc';
        const output = 6; // "abcabc" is the longest valid substring.
        expect(maximumLengthSubstring(input)).toBe(output);
    });

    test('Input with single character pairs', () => {
        const input = 'aabbccdd';
        const output = 8; // The entire string is valid.
        expect(maximumLengthSubstring(input)).toBe(output);
    });

    test('Input with diverse characters and valid substring in the middle', () => {
        const input = 'aaabbbcdefghijkll';
        const output = 13; // "bbcdefghijkll" is the longest valid substring.
        expect(maximumLengthSubstring(input)).toBe(output);
    });

    test('Input with the maximum at the end', () => {
        const input = "dcfdddccb";
        const output = 5; // "dcfdd" or "ddccb"
        expect(maximumLengthSubstring(input)).toBe(output);
    });
});
