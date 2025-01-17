import { generate } from "./generate";

describe("generate", () => {
  /**
   * Test Case 1:
   * Input: numRows = 5
   * Pascal's Triangle:
   * [
   *       [1],
   *      [1, 1],
   *     [1, 2, 1],
   *    [1, 3, 3, 1],
   *   [1, 4, 6, 4, 1]
   * ]
   */
  it("should return the first 5 rows of Pascal's triangle", () => {
    const numRows = 5;
    const expected = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
    expect(generate(numRows)).toEqual(expected);
  });

  /**
   * Test Case 2:
   * Input: numRows = 1
   * Pascal's Triangle:
   * [
   *   [1]
   * ]
   */
  it("should return the first row of Pascal's triangle", () => {
    const numRows = 1;
    const expected = [[1]];
    expect(generate(numRows)).toEqual(expected);
  });

  /**
   * Test Case 3:
   * Input: numRows = 3
   * Pascal's Triangle:
   * [
   *     [1],
   *    [1, 1],
   *   [1, 2, 1]
   * ]
   */
  it("should return the first 3 rows of Pascal's triangle", () => {
    const numRows = 3;
    const expected = [[1], [1, 1], [1, 2, 1]];
    expect(generate(numRows)).toEqual(expected);
  });

  /**
   * Test Case 4:
   * Input: numRows = 6
   * Pascal's Triangle:
   * [
   *        [1],
   *       [1, 1],
   *      [1, 2, 1],
   *     [1, 3, 3, 1],
   *    [1, 4, 6, 4, 1],
   *   [1, 5, 10, 10, 5, 1]
   * ]
   */
  it("should return the first 6 rows of Pascal's triangle", () => {
    const numRows = 6;
    const expected = [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
    ];
    expect(generate(numRows)).toEqual(expected);
  });

  /**
   * Test Case 5:
   * Edge case:
   * Input: numRows = 30 (maximum constraint)
   * Verify the function runs without crashing.
   */
  it("should return the first 30 rows of Pascal's triangle without errors", () => {
    const numRows = 30;
    expect(() => generate(numRows)).not.toThrow();
  });
});
