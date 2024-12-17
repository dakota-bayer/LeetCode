import { backspaceCompare } from './backspaceCompare';

describe('backspaceCompare', () => {
    test('Example 1: Matching strings with backspaces', () => {
        // Input: s = "ab#c", t = "ad#c"
        // Both s and t become "ac"
        expect(backspaceCompare("ab#c", "ad#c")).toBe(true);
    });

    test('Example 2: Empty strings after backspaces', () => {
        // Input: s = "ab##", t = "c#d#"
        // Both s and t become ""
        expect(backspaceCompare("ab##", "c#d#")).toBe(true);
    });

    test('Example 3: Non-matching strings after backspaces', () => {
        // Input: s = "a#c", t = "b"
        // s becomes "c", t becomes "b"
        expect(backspaceCompare("a#c", "b")).toBe(false);
    });

    test('Edge Case 1: Both strings are empty', () => {
        // Input: s = "", t = ""
        // Both s and t remain empty
        expect(backspaceCompare("", "")).toBe(true);
    });

    test('Edge Case 2: One string empty, one non-empty', () => {
        // Input: s = "a#", t = ""
        // s becomes "", t remains ""
        expect(backspaceCompare("a#", "")).toBe(true);

        // Input: s = "", t = "b#"
        // s remains "", t becomes ""
        expect(backspaceCompare("", "b#")).toBe(true);
    });

    test('Edge Case 3: Strings with no backspaces', () => {
        // Input: s = "abc", t = "abc"
        // Both s and t remain "abc"
        expect(backspaceCompare("abc", "abc")).toBe(true);

        // Input: s = "abc", t = "abd"
        // s remains "abc", t remains "abd"
        expect(backspaceCompare("abc", "abd")).toBe(false);
    });

    test('Edge Case 4: Strings with consecutive backspaces', () => {
        // Input: s = "abc##d", t = "ab#d"
        // s becomes "ad", t becomes "ad"
        expect(backspaceCompare("abc##d", "ab#d")).toBe(true);
    });

    test('Edge Case 5: Strings with backspaces at the end', () => {
        // Input: s = "a#", t = "b#"
        // Both s and t become ""
        expect(backspaceCompare("a#", "b#")).toBe(true);

        // Input: s = "a##", t = "b##"
        // Both s and t become ""
        expect(backspaceCompare("a##", "b##")).toBe(true);
    });

    test('weird test case', () => {
        // output = btw
        expect(backspaceCompare("bxj##tw", "bxo#j##tw")).toBe(true);
    });
});
