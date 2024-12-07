import { containsDuplicate } from './containsDuplicate'; 

describe('containsDuplicate', () => {
  test('returns true when array contains duplicates', () => {
    const nums = [1, 2, 3, 1];
    expect(containsDuplicate(nums)).toBe(true);
  });

  test('returns false when all elements are distinct', () => {
    const nums = [1, 2, 3, 4];
    expect(containsDuplicate(nums)).toBe(false);
  });

  test('returns true for array with multiple duplicates', () => {
    const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    expect(containsDuplicate(nums)).toBe(true);
  });

  test('returns false for a single element array', () => {
    const nums = [42];
    expect(containsDuplicate(nums)).toBe(false);
  });

  test('returns true for large array with one duplicate', () => {
    const nums = Array.from({ length: 100000 }, (_, i) => i).concat([99999]);
    expect(containsDuplicate(nums)).toBe(true);
  });

  test('returns false for large array with no duplicates', () => {
    const nums = Array.from({ length: 100000 }, (_, i) => i);
    expect(containsDuplicate(nums)).toBe(false);
  });

  test('handles array with negative numbers', () => {
    const nums = [-1, -2, -3, -1];
    expect(containsDuplicate(nums)).toBe(true);
  });

  test('handles array with all identical elements', () => {
    const nums = [7, 7, 7, 7];
    expect(containsDuplicate(nums)).toBe(true);
  });

  test('handles array with zero and negative numbers', () => {
    const nums = [-1, 0, 1, -1];
    expect(containsDuplicate(nums)).toBe(true);
  });

  test('handles empty array (edge case)', () => {
    const nums: number[] = [];
    expect(containsDuplicate(nums)).toBe(false); // Assumes empty arrays return false
  });
});
