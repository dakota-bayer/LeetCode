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
    if (s.length === t.length && s !== t) {
        return false;
    }

    let k = 0; // current letter we're lookg at in s
    let l = 0; // invalid letter in t

    const tArr = Array.from(t);

    for (let r = 0; r < tArr.length && k < s.length; r++) {
        if (tArr[r] === s[k]) {
            // swap because we found a character that belongs in its position
            const temp = tArr[l];
            tArr[l] = tArr[r];
            tArr[r] = temp;
            l++;
            k++;
        }
    }
    return tArr.slice(0, s.length).join("") === s;
};


const s = "acb";
const t = "ahbgdc";
const result = isSubsequence(s, t);

