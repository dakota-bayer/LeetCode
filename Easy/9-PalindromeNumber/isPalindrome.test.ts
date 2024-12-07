import { isPalindrome } from './isPalindrome';

describe('isPalindrome', () => {

    // Example 1: Basic palindrome case
    it('should return true for x = 121', () => {
        expect(isPalindrome(121)).toBe(true);
    });

    // Example 2: Negative number case (not a palindrome)
    it('should return false for x = -121', () => {
        expect(isPalindrome(-121)).toBe(false);
    });

    // Example 3: Non-palindrome positive number
    it('should return false for x = 10', () => {
        expect(isPalindrome(10)).toBe(false);
    });

    // Edge case: Single-digit number (always a palindrome)
    it('should return true for single-digit numbers', () => {
        expect(isPalindrome(1)).toBe(true);
        expect(isPalindrome(7)).toBe(true);
        expect(isPalindrome(0)).toBe(true);
    });

    // Edge case: Large palindrome number
    it('should return true for a large palindrome number', () => {
        expect(isPalindrome(123454321)).toBe(true);
    });

    // Edge case: Large non-palindrome number
    it('should return false for a large non-palindrome number', () => {
        expect(isPalindrome(123456789)).toBe(false);
    });

    // Edge case: Number with trailing zeros (not a palindrome)
    it('should return false for numbers with trailing zeros', () => {
        expect(isPalindrome(100)).toBe(false);
    });
});
