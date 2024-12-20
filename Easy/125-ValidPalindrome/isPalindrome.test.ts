import { isPalindrome } from './isPalindrome';

describe('isPalindrome', () => {
    test('Example 1: Palindrome with mixed characters and spaces', () => {
        const s = "A man, a plan, a canal: Panama";
        expect(isPalindrome(s)).toBe(true);
    });

    test('Example 2: Not a palindrome', () => {
        const s = "race a car";
        expect(isPalindrome(s)).toBe(false);
    });

    test('Example 3: Empty string or spaces only', () => {
        const s = " ";
        expect(isPalindrome(s)).toBe(true);
    });

    test('Single character string', () => {
        const s = "a";
        expect(isPalindrome(s)).toBe(true);
    });

    test('Two identical characters', () => {
        const s = "aa";
        expect(isPalindrome(s)).toBe(true);
    });

    test('Two different characters', () => {
        const s = "ab";
        expect(isPalindrome(s)).toBe(false);
    });

    test('Palindrome with numbers', () => {
        const s = "12321";
        expect(isPalindrome(s)).toBe(true);
    });

    test('Not a palindrome with numbers', () => {
        const s = "12345";
        expect(isPalindrome(s)).toBe(false);
    });

    test('Palindrome ignoring case sensitivity', () => {
        const s = "Noon";
        expect(isPalindrome(s)).toBe(true);
    });

    test('String with special characters and numbers', () => {
        const s = "Was it a car or a cat I saw?";
        expect(isPalindrome(s)).toBe(true);
    });

    test('Long string palindrome', () => {
        const s = "Aibohphobia"; // "fear of palindromes"
        expect(isPalindrome(s)).toBe(true);
    });

    test('Empty alphanumeric string after filtering', () => {
        const s = "@@@@";
        expect(isPalindrome(s)).toBe(true);
    });

    test('Very long non-palindromic string', () => {
        const s = "a".repeat(100000) + "b";
        expect(isPalindrome(s)).toBe(false);
    });

    test('Very long palindromic string', () => {
        const s = "a".repeat(100000);
        expect(isPalindrome(s)).toBe(true);
    });
});
