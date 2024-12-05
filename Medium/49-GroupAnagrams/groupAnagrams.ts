/* 49. Group Anagrams

Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.

Example 1:
    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
    Explanation:
        There is no string in strs that can be rearranged to form "bat".
        The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
        The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:
    Input: strs = [""]
    Output: [[""]]

Example 3:
    Input: strs = ["a"]
    Output: [["a"]]

Constraints:
    1 <= strs.length <= 10^4
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters.

*/

export function groupAnagrams(strs: string[]): string[][] {
    if (!strs || strs.length === 0) {
        return [];
    }

    const map = new Map<string, string[]>();
    while (strs.length > 0) {
        const str = strs.pop()!;
        const sortedStr = str.split("").sort().join();
        const foundKey = map.get(sortedStr);

        if (foundKey) {
            foundKey.push(str);
        }
        else {
            map.set(sortedStr, [str]);
        }
    }

    return [...map.values()];
}

export function groupAnagramsSlow(strs: string[]): string[][] {
    if (!strs || strs.length === 0) {
        return [];
    }

    const anagrams: string[][] = [];
    anagrams.push([strs.pop()!]);

    while (strs.length > 0) {
        const str = strs.pop()!;
        let foundMatch: boolean = false;

        for (let anagram of anagrams) {
            if (isAnagram(str, anagram[0])) {
                foundMatch = true;
                anagram.push(str);
            }
        }

        if (!foundMatch) {
            anagrams.push([str]);
        }
    }

    return anagrams;
};

function isAnagram(a: string, b: string): boolean {
    if (a.length !== b.length) {
        return false;
    }

    a = a.split("").sort().join();
    b = b.split("").sort().join();

    return a === b;
}