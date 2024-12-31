import { letterCasePermutation } from './letterCasePermutation';

describe('letterCasePermutation', () => {
    test('Example 1: Mixed letters and digits', () => {
        const s = "a1b2";
        const expected = ["a1b2", "a1B2", "A1b2", "A1B2"];
        expect(letterCasePermutation(s).sort()).toEqual(expected.sort());
    });

    test('Example 2: String with digits and one letter', () => {
        const s = "3z4";
        const expected = ["3z4", "3Z4"];
        expect(letterCasePermutation(s).sort()).toEqual(expected.sort());
    });

    test('Edge Case: String with only digits', () => {
        const s = "1234";
        const expected = ["1234"];
        expect(letterCasePermutation(s).sort()).toEqual(expected.sort());
    });

    test('Edge Case: Single lowercase letter', () => {
        const s = "a";
        const expected = ["a", "A"];
        expect(letterCasePermutation(s).sort()).toEqual(expected.sort());
    });

    test('Edge Case: Single uppercase letter', () => {
        const s = "A";
        const expected = ["A", "a"];
        expect(letterCasePermutation(s).sort()).toEqual(expected.sort());
    });

    test('Mixed case string', () => {
        const s = "AbC";
        const expected = ["ABC", "ABc", "AbC", "Abc", "aBC", "aBc", "abC", "abc"];
        expect(letterCasePermutation(s).sort()).toEqual(expected.sort());
    });

    test('Edge Case: Maximum length string with mixed characters', () => {
        const s = "a1B2c3";
        const expectedLength = Math.pow(2, 3); // 3 letters, so 2^3 permutations
        const result = letterCasePermutation(s);
        expect(result.length).toBe(expectedLength);
        result.forEach(permutation => {
            expect(permutation).toMatch(/^[a-zA-Z0-9]+$/);
        });
    });
});
