import { isSubsequence } from "./isSubsequence";

describe("isSubsequence", () => {
    test("Example 1: Subsequence exists", () => {
        const s = "abc";
        const t = "ahbgdc";
        expect(isSubsequence(s, t)).toBe(true);
    });

    test("Example 2: Subsequence does not exist", () => {
        const s = "axc";
        const t = "ahbgdc";
        expect(isSubsequence(s, t)).toBe(false);
    });

    test("Empty s (always true)", () => {
        const s = "";
        const t = "anystring";
        expect(isSubsequence(s, t)).toBe(true);
    });

    test("Empty t and non-empty s (always false)", () => {
        const s = "a";
        const t = "";
        expect(isSubsequence(s, t)).toBe(false);
    });

    test("Both s and t are empty (true)", () => {
        const s = "";
        const t = "";
        expect(isSubsequence(s, t)).toBe(true);
    });

    test("s is longer than t (false)", () => {
        const s = "abcdef";
        const t = "abc";
        expect(isSubsequence(s, t)).toBe(false);
    });

    test("Identical s and t (true)", () => {
        const s = "abc";
        const t = "abc";
        expect(isSubsequence(s, t)).toBe(true);
    });

    test("All characters of s appear in t but out of order (false)", () => {
        const s = "acb";
        const t = "abc";
        expect(isSubsequence(s, t)).toBe(false);
    });

    test("Single character s exists in t (true)", () => {
        const s = "a";
        const t = "ahbgdc";
        expect(isSubsequence(s, t)).toBe(true);
    });

    test("Single character s does not exist in t (false)", () => {
        const s = "z";
        const t = "ahbgdc";
        expect(isSubsequence(s, t)).toBe(false);
    });

    test("t is much longer than s (true)", () => {
        const s = "abc";
        const t = "a" + "x".repeat(1000) + "b" + "x".repeat(1000) + "c";
        expect(isSubsequence(s, t)).toBe(true);
    });

    test("Subsequence out of order: s = 'acb', t = 'ahbgdc'", () => {
        const s = "acb";
        const t = "ahbgdc";
        const result = isSubsequence(s, t);
        expect(result).toBe(false); // "acb" is not a subsequence of "ahbgdc" since the order is disrupted.
    });
});
