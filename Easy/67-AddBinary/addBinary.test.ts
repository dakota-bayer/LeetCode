import { addBinary } from './addBinary';

describe('addBinary', () => {
    it('should correctly add two binary strings of equal length', () => {
        expect(addBinary('11', '1')).toBe('100');
        expect(addBinary('1010', '1011')).toBe('10101');
    });

    it('should correctly add two binary strings when one is significantly longer', () => {
        expect(addBinary('1', '111')).toBe('1000');
        expect(addBinary('110010', '101')).toBe('110111');
    });

    it('should handle adding binary strings with carry propagation', () => {
        expect(addBinary('111', '111')).toBe('1110');
        expect(addBinary('10101', '11111')).toBe('110100');
    });

    it('should handle edge cases where one string is "0"', () => {
        expect(addBinary('0', '0')).toBe('0');
        expect(addBinary('0', '101')).toBe('101');
        expect(addBinary('1101', '0')).toBe('1101');
    });
/*
    it('should handle very large binary strings', () => {
        const a = '1'.repeat(10000); // Binary string of 10^4 ones
        const b = '1'; // Single binary one
        const expected = '1' + '0'.repeat(10000); // Result is "1" followed by 10^4 zeros
        expect(addBinary(a, b)).toBe(expected);
    });
*/
/*
    it('should correctly handle binary strings with no leading zeros except for "0"', () => {
        expect(addBinary('000', '1')).toBe('1');
        expect(addBinary('1', '000')).toBe('1');
    });
*/
    it('should handle binary strings with alternating patterns', () => {
        expect(addBinary('101010', '101010')).toBe('1010100');
        expect(addBinary('110011', '101')).toBe('111000');
    });
});
