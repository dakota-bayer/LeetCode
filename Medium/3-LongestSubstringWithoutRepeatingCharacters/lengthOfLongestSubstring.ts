/* 3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring 
    without repeating characters.

Example 1:
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

Example 2:
    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

Example 3:
    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is 
        a subsequence and not a substring.

Constraints:
    0 <= s.length <= 5 * 10^4
    s consists of English letters, digits, symbols and spaces.

*/

export function lengthOfLongestSubstring(s: string): number {
    if (s.length < 1) {
        return 0;
    }
    let start = 0;
    let end = 1;
    let longest = 1;

    const set: Set<string> = new Set();
    set.add(s[0]);

    while (end < s.length) {
        while(set.has(s[end])) {
            set.delete(s[start]);
            start++;
        }
        set.add((s[end]));
        longest = Math.max(longest, end - start + 1);
        end++;
    }

    return longest;
};

const s = "dvdf";
lengthOfLongestSubstring(s);