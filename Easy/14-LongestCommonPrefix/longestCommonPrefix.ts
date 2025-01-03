/* 14. Longest Common Prefix

Write a function to find the longest common prefix 
    string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
    Input: strs = ["flower","flow","flight"]
    Output: "fl"

Example 2:
    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.

Constraints:
    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters.

*/

// FASTER
export function longestCommonPrefix(strs: string[]): string {
    if (strs.length < 1) {
        return "";
    }

    const sorted = strs.sort((a, b) => a < b ? -1 : 1);
    const first = sorted[0];
    const last = sorted[sorted.length - 1];
    const output: string[] = [];

    for (let i = 0; i < first.length; i++) {
        if (first[i] === last[i]) {
            output.push(first[i]);
        }
        else {
            break;
        }
    }

    return output.join("");
}

// SLOWER
export function longestCommonPrefix2(strs: string[]): string {
    if (strs.length < 1) {
        return "";
    }
    const shortestString = strs.reduce((shortest, current) => current.length < shortest.length ? current : shortest);
    let prefix: string[] = [];

    for (let i = 0; i < shortestString.length; i++) {
        for (const str of strs) {
            if (str[i] !== shortestString[i]) {
                return prefix.join("");
            }
        }
        prefix[i] = shortestString[i];
    }

    return prefix.join("");
};