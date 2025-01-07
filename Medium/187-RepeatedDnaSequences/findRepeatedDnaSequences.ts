/* 187. Repeated DNA Sequences

The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

For example, "ACGAATTCCG" is a DNA sequence.

When studying DNA, it is useful to identify repeated sequences within the DNA.

Given a string s that represents a DNA sequence, return all the 10-letter-long 
    sequences (substrings) that occur more than once in a DNA molecule. 
You may return the answer in any order. 

Example 1:
    Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
    Output: ["AAAAACCCCC","CCCCCAAAAA"]

Example 2:
    Input: s = "AAAAAAAAAAAAA"
    Output: ["AAAAAAAAAA"]

Constraints:
    1 <= s.length <= 105
    s[i] is either 'A', 'C', 'G', or 'T'.

*/

export function findRepeatedDnaSequences(s: string): string[] {
    if (s.length < 10) {
        return [];
    }

    let set: Set<string> = new Set();
    const dups: Set<string> = new Set();

    let start = 0;
    let end = 10;

    while (end <= s.length) {
        let str = s.slice(start, end);

        if (set.has(str)) {
            dups.add(str);
        }
        else {
            set.add(str);
        }

        start++;
        end++;
    }

    return [...dups];
};

/*
const s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
const expected = ["AAAAACCCCC", "CCCCCAAAAA"];
findRepeatedDnaSequences(s);
*/