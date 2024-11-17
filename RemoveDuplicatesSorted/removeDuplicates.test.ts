import { removeDuplicates } from "./removeDuplicates";

// Jest Test Suite
describe("removeDuplicates", () => {
  it("should return correct k and modify nums for [1,1,2]", () => {
    const nums = [1, 1, 2];
    const expectedNums = [1, 2]; // Remaining elements are irrelevant
    const k = removeDuplicates(nums);

    expect(k).toBe(expectedNums.length);
    for (let i = 0; i < k; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });

  it("should return correct k and modify nums for [0,0,1,1,1,2,2,3,3,4]", () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const expectedNums = [0, 1, 2, 3, 4]; // Remaining elements are irrelevant
    const k = removeDuplicates(nums);

    expect(k).toBe(expectedNums.length);
    for (let i = 0; i < k; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });

  it("should handle an array with no duplicates", () => {
    const nums = [1, 2, 3, 4, 5];
    const expectedNums = [1, 2, 3, 4, 5];
    const k = removeDuplicates(nums);

    expect(k).toBe(expectedNums.length);
    for (let i = 0; i < k; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });

  it("should handle an array with all identical elements", () => {
    const nums = [2, 2, 2, 2, 2];
    const expectedNums = [2]; // Remaining elements are irrelevant
    const k = removeDuplicates(nums);

    expect(k).toBe(expectedNums.length);
    for (let i = 0; i < k; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });

  it("should handle an empty array", () => {
    const nums: number[] = [];
    const expectedNums: number[] = [];
    const k = removeDuplicates(nums);

    expect(k).toBe(expectedNums.length);
  });

  it("should handle a large array with duplicates", () => {
    const nums = Array(30000).fill(1).concat(Array(30000).fill(2));
    const expectedNums = [1, 2];
    const k = removeDuplicates(nums);

    expect(k).toBe(expectedNums.length);
    for (let i = 0; i < k; i++) {
      expect(nums[i]).toBe(expectedNums[i]);
    }
  });
});
