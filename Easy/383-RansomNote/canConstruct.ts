/* 383. Ransom Note

Given two strings ransomNote and magazine, return true 
    if ransomNote can be constructed by using the letters 
    from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:
    Input: ransomNote = "a", magazine = "b"
    Output: false

Example 2:
    Input: ransomNote = "aa", magazine = "ab"
    Output: false

Example 3:
    Input: ransomNote = "aa", magazine = "aab"
    Output: true

Constraints:
    1 <= ransomNote.length, magazine.length <= 10^5
    ransomNote and magazine consist of lowercase English letters.


*/

export function canConstruct(ransomNote: string, magazine: string): boolean {
    if (ransomNote.length > magazine.length) return false;

    const map: Map<string, number> = new Map();
    for (let i = 0; i < magazine.length; i++) {
        const freq = (map.get(magazine[i]) ?? 0) + 1;
        map.set(magazine[i], freq);
    }

    for (let i = 0; i < ransomNote.length; i++) {
        const freq = (map.get(ransomNote[i]) ?? 0) - 1;
        if (freq < 0) return false;
        map.set(ransomNote[i], freq);
    }

    return true;
};