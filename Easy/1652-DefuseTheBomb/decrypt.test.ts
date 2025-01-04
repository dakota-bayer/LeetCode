import { decrypt } from './decrypt';

describe('decrypt', () => {
    it('should handle k > 0 (sum of next k numbers)', () => {
        const code = [5, 7, 1, 4];
        const k = 3;
        const result = decrypt(code, k);
        expect(result).toEqual([12, 10, 16, 13]); // [7+1+4, 1+4+5, 4+5+7, 5+7+1]
    });

    it('should handle k == 0 (replace all numbers with 0)', () => {
        const code = [1, 2, 3, 4];
        const k = 0;
        const result = decrypt(code, k);
        expect(result).toEqual([0, 0, 0, 0]);
    });

    it('should handle k < 0 (sum of previous k numbers)', () => {
        const code = [2, 4, 9, 3];
        const k = -2;
        const result = decrypt(code, k);
        expect(result).toEqual([12, 5, 6, 13]); // [3+9, 2+3, 4+2, 9+4]
    });

    it('should handle single-element array (k > 0)', () => {
        const code = [10];
        const k = 1;
        const result = decrypt(code, k);
        expect(result).toEqual([10]);
    });

    it('should handle single-element array (k < 0)', () => {
        const code = [10];
        const k = -1;
        const result = decrypt(code, k);
        expect(result).toEqual([10]);
    });

    it('should handle k greater than array length', () => {
        const code = [1, 2, 3, 4];
        const k = 5;
        const result = decrypt(code, k);
        expect(result).toEqual([12, 13, 14, 11]); // Circular array sums
    });

    it('should handle k less than negative array length', () => {
        const code = [1, 2, 3, 4];
        const k = -5;
        const result = decrypt(code, k);
        expect(result).toEqual([14, 11, 12, 13]); // Circular array sums
    });

    it('should handle edge case of all elements being the same', () => {
        const code = [3, 3, 3, 3];
        const k = 2;
        const result = decrypt(code, k);
        expect(result).toEqual([6, 6, 6, 6]); // [3+3, 3+3, 3+3, 3+3]
    });

    it('should handle edge case of k = 1', () => {
        const code = [1, 2, 3, 4];
        const k = 1;
        const result = decrypt(code, k);
        expect(result).toEqual([2, 3, 4, 1]); // [2, 3, 4, 1]
    });

    it('should handle edge case of k = -1', () => {
        const code = [1, 2, 3, 4];
        const k = -1;
        const result = decrypt(code, k);
        expect(result).toEqual([4, 1, 2, 3]); // [4, 1, 2, 3]
    });
});
