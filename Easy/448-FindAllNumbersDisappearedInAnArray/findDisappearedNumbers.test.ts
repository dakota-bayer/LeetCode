import { findDisappearedNumbers } from './findDisappearedNumbers'; // Replace with the correct file path

describe('findDisappearedNumbers', () => {
  test('returns missing numbers for array with duplicates (example 1)', () => {
    const nums = [4, 3, 2, 7, 8, 2, 3, 1];
    expect(findDisappearedNumbers(nums)).toEqual([5, 6]);
  });

  test('returns missing number for array with all duplicates (example 2)', () => {
    const nums = [1, 1];
    expect(findDisappearedNumbers(nums)).toEqual([2]);
  });

  test('returns empty array when no numbers are missing', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(findDisappearedNumbers(nums)).toEqual([]);
  });

  test('handles single element array with no missing numbers', () => {
    const nums = [1];
    expect(findDisappearedNumbers(nums)).toEqual([]);
  });

  test('handles single element array with missing number', () => {
    const nums = [2];
    expect(findDisappearedNumbers(nums)).toEqual([1]);
  });

  test('returns all numbers for an empty array', () => {
    const nums: number[] = [];
    expect(findDisappearedNumbers(nums)).toEqual([]);
  });

/*
  test('handles large array with one missing number', () => {
    const n = 10000;
    const nums = Array.from({ length: n - 1 }, (_, i) => i + 1).concat([1]); // Missing n
    expect(findDisappearedNumbers(nums)).toEqual([n]);
  });
*/

/*
  test('handles large array with multiple missing numbers', () => {
    const n = 10000;
    const nums = Array.from({ length: n }, (_, i) => (i % 2 === 0 ? i + 1 : 1)); // Every second number missing
    const expected = Array.from({ length: n / 2 }, (_, i) => i * 2 + 2);
    expect(findDisappearedNumbers(nums)).toEqual(expected);
  });
*/

  test('handles shuffled array with missing numbers', () => {
    const nums = [10, 2, 3, 4, 5, 5, 7, 7, 1, 9];
    expect(findDisappearedNumbers(nums)).toEqual([6, 8]);
  });
});
