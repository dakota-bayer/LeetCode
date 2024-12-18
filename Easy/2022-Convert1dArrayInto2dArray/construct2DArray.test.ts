import { construct2DArray } from "./construct2DArray";

describe("construct2DArray", () => {
    test("Example 1: 2x2 matrix from a valid input", () => {
        const original = [1, 2, 3, 4];
        const m = 2, n = 2;
        // Input: [1, 2, 3, 4]
        // Output:
        // [[1, 2],
        //  [3, 4]]
        const expectedOutput = [[1, 2], [3, 4]];
        expect(construct2DArray(original, m, n)).toEqual(expectedOutput);
    });

    test("Example 2: 1x3 matrix from a valid input", () => {
        const original = [1, 2, 3];
        const m = 1, n = 3;
        // Input: [1, 2, 3]
        // Output:
        // [[1, 2, 3]]
        const expectedOutput = [[1, 2, 3]];
        expect(construct2DArray(original, m, n)).toEqual(expectedOutput);
    });

    test("Example 3: Impossible to construct, return empty 2D array", () => {
        const original = [1, 2];
        const m = 1, n = 1;
        // Input: [1, 2]
        // Output: []
        const expectedOutput: number[][] = [];
        expect(construct2DArray(original, m, n)).toEqual(expectedOutput);
    });

    test("Edge Case: 1D array fits perfectly into 1x1 matrix", () => {
        const original = [5];
        const m = 1, n = 1;
        // Input: [5]
        // Output:
        // [[5]]
        const expectedOutput = [[5]];
        expect(construct2DArray(original, m, n)).toEqual(expectedOutput);
    });

    test("Edge Case: 1D array cannot fit into specified dimensions", () => {
        const original = [1, 2, 3, 4, 5, 6];
        const m = 2, n = 4;
        // Input: [1, 2, 3, 4, 5, 6]
        // Output: []
        const expectedOutput: number[][] = [];
        expect(construct2DArray(original, m, n)).toEqual(expectedOutput);
    });

    test("General Case: 3x2 matrix with correct grouping", () => {
        const original = [1, 2, 3, 4, 5, 6];
        const m = 3, n = 2;
        // Input: [1, 2, 3, 4, 5, 6]
        // Output:
        // [[1, 2],
        //  [3, 4],
        //  [5, 6]]
        const expectedOutput = [[1, 2], [3, 4], [5, 6]];
        expect(construct2DArray(original, m, n)).toEqual(expectedOutput);
    });

    test("General Case: Larger matrix 4x3", () => {
        const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const m = 4, n = 3;
        // Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        // Output:
        // [[1, 2, 3],
        //  [4, 5, 6],
        //  [7, 8, 9],
        //  [10, 11, 12]]
        const expectedOutput = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [10, 11, 12]
        ];
        expect(construct2DArray(original, m, n)).toEqual(expectedOutput);
    });

    test("General Case: Empty output for non-fitting dimensions", () => {
        const original = [1, 2, 3, 4, 5];
        const m = 3, n = 2;
        // Input: [1, 2, 3, 4, 5]
        // Output: []
        const expectedOutput: number[][] = [];
        expect(construct2DArray(original, m, n)).toEqual(expectedOutput);
    });

    test("Edge Case: Large input array with valid m and n", () => {
        const original = Array.from({ length: 10000 }, (_, i) => i + 1);
        const m = 100, n = 100;
        // Input: [1, 2, 3, ..., 10000]
        // Output: [
        //  [1, 2, ..., 100],
        //  [101, 102, ..., 200],
        //  ...
        //  [9901, 9902, ..., 10000]
        // ]
        const expectedOutput = Array.from({ length: 100 }, (_, row) =>
            Array.from({ length: 100 }, (_, col) => row * 100 + col + 1)
        );
        expect(construct2DArray(original, m, n)).toEqual(expectedOutput);
    });
});
