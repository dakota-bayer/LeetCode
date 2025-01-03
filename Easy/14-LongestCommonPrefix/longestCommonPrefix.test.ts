import { longestCommonPrefix } from './longestCommonPrefix'; // Adjust the import path as needed

describe('longestCommonPrefix', () => {
    it('should return the longest common prefix for a normal array of strings', () => {
        const strs = ["flower", "flow", "flight"];
        const result = longestCommonPrefix(strs);
        expect(result).toBe("fl"); // "fl" is the longest common prefix
    });

    it('should return an empty string when there is no common prefix', () => {
        const strs = ["dog", "racecar", "car"];
        const result = longestCommonPrefix(strs);
        expect(result).toBe(""); // No common prefix
    });

    it('should return the entire string when all strings are identical', () => {
        const strs = ["test", "test", "test"];
        const result = longestCommonPrefix(strs);
        expect(result).toBe("test"); // Entire string is the common prefix
    });

    it('should return an empty string for an array with one empty string', () => {
        const strs = ["", "prefix", "pre"];
        const result = longestCommonPrefix(strs);
        expect(result).toBe(""); // One string is empty, so no common prefix
    });

    it('should return the shortest string when all strings are prefixes of the shortest one', () => {
        const strs = ["abc", "ab", "a"];
        const result = longestCommonPrefix(strs);
        expect(result).toBe("a"); // "a" is the common prefix
    });

    it('should handle an array with a single string', () => {
        const strs = ["single"];
        const result = longestCommonPrefix(strs);
        expect(result).toBe("single"); // The single string is the prefix
    });

    it('should return an empty string for an empty array', () => {
        const strs: string[] = [];
        const result = longestCommonPrefix(strs);
        expect(result).toBe(""); // No strings, so no common prefix
    });

    it('should return an empty string when all strings have no common starting character', () => {
        const strs = ["apple", "banana", "carrot"];
        const result = longestCommonPrefix(strs);
        expect(result).toBe(""); // No common prefix
    });

    it('should handle large input arrays efficiently', () => {
        const strs = Array(200).fill("prefix");
        const result = longestCommonPrefix(strs);
        expect(result).toBe("prefix"); // All strings are identical
    });

    it('should return the correct prefix for varying string lengths', () => {
        const strs = ["interview", "interact", "interval"];
        const result = longestCommonPrefix(strs);
        expect(result).toBe("inter"); // "inter" is the longest common prefix
    });
});
