import { sortedSquares } from "./sortedSquares";

describe("sortedSquares", () => {
    test("Example 1: Mixed negative and positive numbers", () => {
        const nums = [-4, -1, 0, 3, 10];
        const expected = [0, 1, 9, 16, 100];
        expect(sortedSquares(nums)).toEqual(expected);
    });

    test("Example 2: Mixed negative and positive numbers", () => {
        const nums = [-7, -3, 2, 3, 11];
        const expected = [4, 9, 9, 49, 121];
        expect(sortedSquares(nums)).toEqual(expected);
    });

    test("Only positive numbers", () => {
        const nums = [1, 2, 3, 4, 5];
        const expected = [1, 4, 9, 16, 25];
        expect(sortedSquares(nums)).toEqual(expected);
    });

    test("Only negative numbers", () => {
        const nums = [-5, -4, -3, -2, -1];
        const expected = [1, 4, 9, 16, 25];
        expect(sortedSquares(nums)).toEqual(expected);
    });

    test("Single element: Zero", () => {
        const nums = [0];
        const expected = [0];
        expect(sortedSquares(nums)).toEqual(expected);
    });

    test("Single element: Positive number", () => {
        const nums = [3];
        const expected = [9];
        expect(sortedSquares(nums)).toEqual(expected);
    });

    test("Single element: Negative number", () => {
        const nums = [-3];
        const expected = [9];
        expect(sortedSquares(nums)).toEqual(expected);
    });

    test("Empty array", () => {
        const nums: number[] = [];
        const expected: number[] = [];
        expect(sortedSquares(nums)).toEqual(expected);
    });

    test("Large array", () => {
        const nums = Array.from({ length: 1000 }, (_, i) => i - 500); // [-500, -499, ..., 499]
        const expected = nums.map((num) => num * num).sort((a, b) => a - b);
        expect(sortedSquares(nums)).toEqual(expected);
    });

    test("Array with duplicates", () => {
        const nums = [-2, -2, 0, 2, 2];
        const expected = [0, 4, 4, 4, 4];
        expect(sortedSquares(nums)).toEqual(expected);
    });
});
