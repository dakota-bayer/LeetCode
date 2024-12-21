/* 242. Valid Anagram

Given two strings s and t, return true if t is a anagram of s, and false otherwise.

Example 1:
    Input: s = "anagram", t = "nagaram"
    Output: true

Example 2:
    Input: s = "rat", t = "car"
    Output: false

Constraints:
    1 <= s.length, t.length <= 5 * 10^4
    s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

*/

export function isAnagram(s: string, t: string): boolean {
    const map: Map<string, number> = new Map();
    for (let char of s) {
        const val = map.get(char) ?? 0;
        map.set(char, val + 1);
    }

    for (let char of t) {
        const val = map.get(char) ?? 0;
        if (val <= 0) {
            return false;
        }
        map.set(char, val - 1);
    }

    for (let [key, value] of map) {
        if (value > 0) return false;
    }

    return true;
};