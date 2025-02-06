import { strStr } from './strStr';

describe('strStr', () => {
    it('should return 0 if needle is found at the beginning of haystack', () => {
        expect(strStr('sadbutsad', 'sad')).toBe(0);
    });

    it('should return the correct index for the first occurrence of needle', () => {
        expect(strStr('sadbutsad', 'but')).toBe(3);
    });

    it('should return -1 if needle is not found in haystack', () => {
        expect(strStr('leetcode', 'leeto')).toBe(-1);
    });

    it('should return 0 if needle is an empty string', () => {
        expect(strStr('anystring', '')).toBe(0);
    });

    it('should return -1 if haystack is empty and needle is not', () => {
        expect(strStr('', 'needle')).toBe(-1);
    });

    it('should return 0 if both haystack and needle are empty', () => {
        expect(strStr('', '')).toBe(0);
    });

    it('should return the correct index when needle is at the end of haystack', () => {
        expect(strStr('hello', 'lo')).toBe(3);
    });
});