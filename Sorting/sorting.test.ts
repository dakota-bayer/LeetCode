import { quickSort } from './quickSort';

describe('quickSort', () => {
  test('should sort an array of positive numbers', () => {
    const nums = [3, 6, 8, 10, 1, 2, 1];
    const sorted = quickSort(nums);
    expect(sorted).toEqual([1, 1, 2, 3, 6, 8, 10]);
  });

  test('should sort an array of negative numbers', () => {
    const nums = [-3, -6, -8, -10, -1, -2, -1];
    const sorted = quickSort(nums);
    expect(sorted).toEqual([-10, -8, -6, -3, -2, -1, -1]);
  });

  test('should sort an array with both positive and negative numbers', () => {
    const nums = [3, -6, 8, -10, 1, -2, 0];
    const sorted = quickSort(nums);
    expect(sorted).toEqual([-10, -6, -2, 0, 1, 3, 8]);
  });

  test('should handle an empty array', () => {
    const nums: number[] = [];
    const sorted = quickSort(nums);
    expect(sorted).toEqual([]);
  });

  test('should handle an array with a single element', () => {
    const nums = [5];
    const sorted = quickSort(nums);
    expect(sorted).toEqual([5]);
  });

  test('should handle an array with duplicate numbers', () => {
    const nums = [4, 2, 4, 2, 4, 1];
    const sorted = quickSort(nums);
    expect(sorted).toEqual([1, 2, 2, 4, 4, 4]);
  });

  test('should handle an already sorted array', () => {
    const nums = [1, 2, 3, 4, 5];
    const sorted = quickSort(nums);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle a reverse sorted array', () => {
    const nums = [5, 4, 3, 2, 1];
    const sorted = quickSort(nums);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an array with all identical elements', () => {
    const nums = [7, 7, 7, 7];
    const sorted = quickSort(nums);
    expect(sorted).toEqual([7, 7, 7, 7]);
  });
});
