import { findDisappearedNumbers } from "./findDisappearedNumbers";

describe("find number missing in the range 1 to n", () => {
  test("Test 1: should return missing numbers when there are duplicates", () => {
    const result = findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
    expect(result).toEqual([5, 6]);
  });

  test("Test 2: should return missing number when there is only one missing number", () => {
    const result = findDisappearedNumbers([1, 1]);
    expect(result).toEqual([2]);
  });

//   test('Test 3: should return all numbers if the array is empty', () => {
//     const nums: number[] = [];
//     expect(findDisappearedNumbers(nums)).toEqual([1]);
//   });

  test('Test 4: should return an empty array if no numbers are missing', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(findDisappearedNumbers(nums)).toEqual([]);
  });

  test('Test 5: should return all numbers if the input array is a permutation of [1, n]', () => {
    const nums = [5, 3, 4, 1, 2];
    expect(findDisappearedNumbers(nums)).toEqual([]);
  });

  test('Test 6: should return missing numbers for a case where all but one number are present', () => {
    const nums = [1, 2, 3, 5];
    expect(findDisappearedNumbers(nums)).toEqual([4]);
  });

  test('Test 7: should return all numbers in a range when no numbers are present', () => {
    const nums = [7, 8, 9, 10];
    const result = findDisappearedNumbers(nums);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
