/* 3090. Maximum Length Substring with Two Occurrences

Given a string s, return the maximum length of a substring such that it contains at most two occurrences of each character.

Example 1:
    Input: s = "bcbbbcba"
    Output: 4
    Explanation: The following substring has a length of 4 and contains at most two occurrences of each character: "bcbbbcba".

Example 2:
    Input: s = "aaaa"
    Output: 2
    Explanation: The following substring has a length of 2 and contains at most two occurrences of each character: "aaaa".

Constraints:
    2 <= s.length <= 100
    s consists only of lowercase English letters.

*/

export function maximumLengthSubstring(s: string): number {
    let longest = 0;
    let start = 0;
    let end = 0;
    const map: Map<string, number> = new Map();

    while (end < s.length) {
        // see if we've maxed out this character
        let endFreq = map.get(s[end]) ?? 0;

        while (endFreq >= 2) {
            const startFreq = map.get(s[start])!;
            map.set(s[start], startFreq - 1);
            start++;
            endFreq = map.get(s[end]) ?? 0;
        }

        map.set(s[end], endFreq + 1);
        end++;

        longest = Math.max(longest, end - start);
    }

    return longest;
};

const input = "dcfdddccb";
maximumLengthSubstring(input);