import { plusOne } from "./plusOne";

describe("plusOne", () => {
    test("should increment a simple number", () => {
        expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    });

    test("should handle carry-over within digits", () => {
        expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
    });

    test("should handle carry-over creating a new digit", () => {
        expect(plusOne([9])).toEqual([1, 0]);
        expect(plusOne([9, 9])).toEqual([1, 0, 0]);
    });

    test("should handle an array of multiple 9's", () => {
        expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
    });

    test("should handle a single digit less than 9", () => {
        expect(plusOne([0])).toEqual([1]);
        expect(plusOne([8])).toEqual([9]);
    });

    test("should handle large arrays without carry-over", () => {
        expect(plusOne([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 9, 0]);
    });

    test("should handle large arrays with carry-over", () => {
        expect(plusOne([1, 2, 3, 9])).toEqual([1, 2, 4, 0]);
    });
});
