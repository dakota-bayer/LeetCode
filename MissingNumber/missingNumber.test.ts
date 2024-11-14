import { missingNumber } from "./missingNumber";

describe("find a missing number in the range 0 to n", () => {
  test("Example 1: n = 3, missing a number", () => {
    const result = missingNumber([3, 0, 1]);
    expect(result).toBe(2);
  });
  test("Example 2: n = 2, not missing a number, but adds onto end", () => {
    const result = missingNumber([0, 1]);
    expect(result).toBe(2);
  });
  test("Example 3: n = 9", () => {
    const result = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
    expect(result).toBe(8);
  });

  test("Example 4: long list", () => {
    const result = missingNumber([
      45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11,
      32, 4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40,
      34, 30, 25, 47, 0, 31, 42, 24, 10, 14,
    ]);
    expect(result).toBe(18);
  });
});
