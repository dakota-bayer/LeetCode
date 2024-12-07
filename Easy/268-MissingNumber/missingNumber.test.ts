import { missingNumber } from './missingNumber'; // Replace with the correct file path

describe('missingNumber', () => {
  test('returns the missing number for small array (example 1)', () => {
    const nums = [3, 0, 1];
    expect(missingNumber(nums)).toBe(2);
  });

  test('returns the missing number for small array (example 2)', () => {
    const nums = [0, 1];
    expect(missingNumber(nums)).toBe(2);
  });

  test('returns the missing number for a shuffled larger array (example 3)', () => {
    const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
    expect(missingNumber(nums)).toBe(8);
  });

  test('handles case where 0 is the missing number', () => {
    const nums = [1, 2, 3];
    expect(missingNumber(nums)).toBe(0);
  });

  test('handles case where n is the missing number', () => {
    const nums = [0, 1, 2];
    expect(missingNumber(nums)).toBe(3);
  });

  test('handles single element array where 0 is missing', () => {
    const nums = [1];
    expect(missingNumber(nums)).toBe(0);
  });

  test('handles single element array where 1 is missing', () => {
    const nums = [0];
    expect(missingNumber(nums)).toBe(1);
  });

  test('handles larger array with missing number in the middle', () => {
    const nums = [0, 1, 3, 4, 5];
    expect(missingNumber(nums)).toBe(2);
  });

  test('handles largest possible array size with missing number at the start', () => {
    const n = 10000;
    const nums = Array.from({ length: n }, (_, i) => i + 1); // Missing 0
    expect(missingNumber(nums)).toBe(0);
  });

  test('handles largest possible array size with missing number at the end', () => {
    const n = 10000;
    const nums = Array.from({ length: n }, (_, i) => i); // Missing n
    expect(missingNumber(nums)).toBe(n);
  });
});
