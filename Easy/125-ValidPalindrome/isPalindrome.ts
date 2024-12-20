/* 125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters 
    into lowercase letters and removing all non-alphanumeric characters, 
    it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
    Input: s = "A man, a plan, a canal: Panama"
    Output: true
    Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
    Input: s = "race a car"
    Output: false
    Explanation: "raceacar" is not a palindrome.

Example 3:
    Input: s = " "
    Output: true
    Explanation: s is an empty string "" after removing non-alphanumeric characters.
        Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:
    1 <= s.length <= 2 * 10^5
    s consists only of printable ASCII characters.

*/

export function isPalindrome(s: string): boolean {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    const stack: string[] = [];

    let i = 0;

    while (i < Math.floor(s.length / 2)) {
        stack.push(s[i++]);
    }

    if (s.length % 2 === 1) i++;

    while (i < s.length) {
        if (s[i++] !== stack.pop()) return false;
    }

    return true;
};