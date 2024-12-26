/* 409. Longest Palindrome

Given a string s which consists of lowercase or uppercase letters, return 
    the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome.

Example 1:
    Input: s = "abccccdd"
    Output: 7
    Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:
    Input: s = "a"
    Output: 1
    Explanation: The longest palindrome that can be built is "a", whose length is 1.

Constraints:
    1 <= s.length <= 2000
    s consists of lowercase and/or uppercase English letters only.

*/

export function longestPalindrome(s: string): number {
    const map: Map<string, number> = new Map();
    for (let i = 0; i < s.length; i++) {
        const freq = (map.get(s[i]) ?? 0) + 1;
        map.set(s[i], freq);
    }

    // all values must be even #
    // one value can be odd

    let singleLetterAdded: boolean = false;
    let count: number = 0;

    for (let [_, value] of map) {
        if (value % 2 === 1) {
            value -= 1;
            if (!singleLetterAdded) {
                count++;
                singleLetterAdded = true;
            }
        }
        count += value;
    }

    return count;
};