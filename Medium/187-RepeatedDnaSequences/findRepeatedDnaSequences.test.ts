import { findRepeatedDnaSequences } from './findRepeatedDnaSequences';

describe('findRepeatedDnaSequences', () => {
    it('should return repeated 10-letter-long sequences in typical case', () => {
        const s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
        const expected = ["AAAAACCCCC", "CCCCCAAAAA"];
        expect(findRepeatedDnaSequences(s).sort()).toEqual(expected.sort());
    });

    it('should handle cases with overlapping repeated sequences', () => {
        const s = "AAAAAAAAAAAAA";
        const expected = ["AAAAAAAAAA"];
        expect(findRepeatedDnaSequences(s).sort()).toEqual(expected.sort());
    });

    it('should return an empty array if no repeated sequences', () => {
        const s = "ACGTACGTAC";
        const expected: string[] = [];
        expect(findRepeatedDnaSequences(s)).toEqual(expected);
    });

    it('should return an empty array if string length is less than 10', () => {
        const s = "ACGT";
        const expected: string[] = [];
        expect(findRepeatedDnaSequences(s)).toEqual(expected);
    });

    it('should handle edge case with exactly one 10-character substring', () => {
        const s = "ACGTACGTAC";
        const expected: string[] = [];
        expect(findRepeatedDnaSequences(s)).toEqual(expected);
    });

    it('should handle long strings with multiple repeated sequences', () => {
        const s = "ACGTACGTACGTACGTACGT";
        const expected = ["ACGTACGTAC", "CGTACGTACG", "GTACGTACGT", "TACGTACGTA"];
        expect(findRepeatedDnaSequences(s).sort()).toEqual(expected.sort());
    });

    it('should return repeated sequences even if they appear non-contiguously', () => {
        const s = "ACGTACGTACGGGGACGTACGTAC";
        const expected = ["ACGTACGTAC"];
        expect(findRepeatedDnaSequences(s).sort()).toEqual(expected.sort());
    });
});
