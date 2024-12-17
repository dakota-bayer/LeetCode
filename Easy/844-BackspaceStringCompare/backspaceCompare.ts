/* 844. Backspace String Compare - rated easy but I STRUGGLED through this one

Given two strings s and t, return true if they are equal
    when both are typed into empty text editors. 
'#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:
    Input: s = "ab#c", t = "ad#c"
    Output: true
    Explanation: Both s and t become "ac".

Example 2:
    Input: s = "ab##", t = "c#d#"
    Output: true
    Explanation: Both s and t become "".

Example 3:
    Input: s = "a#c", t = "b"
    Output: false
    Explanation: s becomes "c" while t becomes "b".

Constraints:
    1 <= s.length, t.length <= 200
    s and t only contain lowercase letters and '#' characters.

Follow up: Can you solve it in O(n) time and O(1) space?

*/

export function backspaceCompare(s: string, t: string): boolean {
    let sIndex = s.length - 1;
    let tIndex = t.length - 1;

    while (sIndex >= 0 || tIndex >= 0) {
        if (s[sIndex] === "#") {
            let charactersToSkip = 1;
            while (charactersToSkip >= 0) {
                sIndex--;
                if (s[sIndex] === "#") {
                    charactersToSkip++;
                }
                else {
                    charactersToSkip--;
                }
            }
        }

        if (t[tIndex] === "#") {
            let charactersToSkip = 1;
            while (charactersToSkip >= 0) {
                tIndex--;
                if (t[tIndex] === "#") {
                    charactersToSkip++;
                }
                else {
                    charactersToSkip--;
                }
            }
        }

        if (s[sIndex] !== t[tIndex]) {
            return false;
        }

        sIndex--;
        tIndex--;
    }
    return true;
};

// backspaceCompare("ab##", "c#d#");