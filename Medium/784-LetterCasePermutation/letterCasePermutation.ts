/* 784. Letter Case Permutation

Given a string s, you can transform every letter individually to 
    be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. 
Return the output in any order.

Example 1:
    Input: s = "a1b2"
    Output: ["a1b2","a1B2","A1b2","A1B2"]

Example 2:
    Input: s = "3z4"
    Output: ["3z4","3Z4"]

Constraints:
    1 <= s.length <= 12
    s consists of lowercase English letters, uppercase English letters, and digits.

*/

export function letterCasePermutation(s: string): string[] {
    const set: Set<string> = new Set();

    function dfs(str: string, pos: number): void {
        set.add(str);
        if (pos === s.length) return;
        dfs(str.slice(0, pos) + str[pos].toLowerCase() + str.slice(pos + 1, str.length), pos + 1);
        dfs(str.slice(0, pos) + str[pos].toUpperCase() + str.slice(pos + 1, str.length), pos + 1);
    }

    dfs(s, 0);

    return Array.from(set);
};

// letterCasePermutation("AbC");