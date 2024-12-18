/* 392. Is Subsequence

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by
     deleting some (can be none) of the characters without disturbing the relative 
     positions of the remaining characters. 
     (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:
    Input: s = "abc", t = "ahbgdc"
    Output: true

Example 2:
    Input: s = "axc", t = "ahbgdc"
    Output: false

Constraints:
    0 <= s.length <= 100
    0 <= t.length <= 10^4
    s and t consist only of lowercase English letters.
 
Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 10^9, 
    and you want to check one by one to see if t has its subsequence. 
    In this scenario, how would you change your code?

*/

export function isSubsequence(s: string, t: string): boolean {
    let sIndex = 0; // current letter we're lookg at in s
    let tIndex = 0; // current letter we're looking at in t

    while (sIndex < s.length && tIndex < t.length) {
        if (s[sIndex] === t[tIndex]) {
            // increment s because we found  match
            sIndex++;
        }
        tIndex++;
    }

    return sIndex == s.length; // true if we found all matches
};


// const s = "acb";
// const t = "ahbgdc";
// const result = isSubsequence(s, t);

