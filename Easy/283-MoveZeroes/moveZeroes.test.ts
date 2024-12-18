import { moveZeroes } from "./moveZeroes";

describe("moveZeroes", () => {
    test("Example 1: Mix of zeros and non-zeros", () => {
        const nums = [0, 1, 0, 3, 12];
        moveZeroes(nums);
        expect(nums).toEqual([1, 3, 12, 0, 0]);
    });

    test("Example 2: Single zero", () => {
        const nums = [0];
        moveZeroes(nums);
        expect(nums).toEqual([0]);
    });

    test("All non-zero elements", () => {
        const nums = [1, 2, 3, 4];
        moveZeroes(nums);
        expect(nums).toEqual([1, 2, 3, 4]);
    });

    test("All zero elements", () => {
        const nums = [0, 0, 0, 0];
        moveZeroes(nums);
        expect(nums).toEqual([0, 0, 0, 0]);
    });

    test("Zeros interspersed with non-zeros", () => {
        const nums = [0, 0, 1, 0, 2, 0, 3];
        moveZeroes(nums);
        expect(nums).toEqual([1, 2, 3, 0, 0, 0, 0]);
    });

    test("Single element: Non-zero", () => {
        const nums = [5];
        moveZeroes(nums);
        expect(nums).toEqual([5]);
    });

    test("Empty array", () => {
        const nums: number[] = [];
        moveZeroes(nums);
        expect(nums).toEqual([]);
    });

    test("Large input array", () => {
        const nums = [0, 1, 0, 2, 0, 3, 0, 4, 0, 5];
        moveZeroes(nums);
        expect(nums).toEqual([1, 2, 3, 4, 5, 0, 0, 0, 0, 0]);
    });

    test("Zero at the end", () => {
        const nums = [1, 2, 3, 0];
        moveZeroes(nums);
        expect(nums).toEqual([1, 2, 3, 0]);
    });
});
