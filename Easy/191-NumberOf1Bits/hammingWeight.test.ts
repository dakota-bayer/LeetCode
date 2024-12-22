import { hammingWeight } from "./hammingWeight"; // Adjust the import path as necessary

describe("hammingWeight", () => {
  test("should return 3 for input 11", () => {
    expect(hammingWeight(11)).toBe(3);
  });

  test("should return 1 for input 128", () => {
    expect(hammingWeight(128)).toBe(1);
  });

  test("should return 30 for input 2147483645", () => {
    expect(hammingWeight(2147483645)).toBe(30);
  });

  test("should return 0 for input 0", () => {
    expect(hammingWeight(0)).toBe(0);
  });

  test("should return 32 for input 4294967295 (all bits set for 32-bit)", () => {
    expect(hammingWeight(4294967295)).toBe(32);
  });

  test("should handle large numbers correctly", () => {
    expect(hammingWeight(987654321)).toBe(17);
  });
});
