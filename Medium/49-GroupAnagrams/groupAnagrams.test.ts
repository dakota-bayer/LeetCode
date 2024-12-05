import { groupAnagrams } from './groupAnagrams'; // Adjust the import as needed

describe('groupAnagrams', () => {
    it('should group anagrams correctly for a general case', () => {
        const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
        const result = groupAnagrams(strs);
        const expected = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];
        
        // Compare as sets to account for different orders
        expect(result).toHaveLength(3);
        expect(result).toEqual(expect.arrayContaining([
            expect.arrayContaining(["bat"]),
            expect.arrayContaining(["nat", "tan"]),
            expect.arrayContaining(["ate", "eat", "tea"]),
        ]));
    });

    it('should handle a single empty string', () => {
        const strs = [""];
        const result = groupAnagrams(strs);
        expect(result).toEqual([[""]]);
    });

    it('should handle a single character string', () => {
        const strs = ["a"];
        const result = groupAnagrams(strs);
        expect(result).toEqual([["a"]]);
    });

    it('should handle multiple identical strings', () => {
        const strs = ["aa", "aa", "aa"];
        const result = groupAnagrams(strs);
        expect(result).toEqual([["aa", "aa", "aa"]]);
    });

    it('should handle no input strings', () => {
        const strs: string[] = [];
        const result = groupAnagrams(strs);
        expect(result).toEqual([]);
    });

    it('should handle a mix of anagrams and non-anagrams', () => {
        const strs = ["abc", "bca", "cab", "xyz", "zyx", "a"];
        const result = groupAnagrams(strs);
        expect(result).toEqual(expect.arrayContaining([
            expect.arrayContaining(["abc", "bca", "cab"]),
            expect.arrayContaining(["xyz", "zyx"]),
            expect.arrayContaining(["a"]),
        ]));
    });

    it('should handle strings of varying lengths', () => {
        const strs = ["a", "ab", "ba", "abc", "cba"];
        const result = groupAnagrams(strs);
        expect(result).toEqual(expect.arrayContaining([
            expect.arrayContaining(["a"]),
            expect.arrayContaining(["ab", "ba"]),
            expect.arrayContaining(["abc", "cba"]),
        ]));
    });
});
