import { describe, test, expect } from '@jest/globals';
import { NumArray } from './sumRange';

describe("NumArray", () => {
    test("Example case", () => {
        const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
        expect(numArray.sumRange(0, 2)).toBe(1);  // (-2) + 0 + 3 = 1
        expect(numArray.sumRange(2, 5)).toBe(-1); // 3 + (-5) + 2 + (-1) = -1
        expect(numArray.sumRange(0, 5)).toBe(-3); // (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
    });

    test("Single element", () => {
        const numArray = new NumArray([10]);
        expect(numArray.sumRange(0, 0)).toBe(10);
    });

    test("Multiple identical elements", () => {
        const numArray = new NumArray([5, 5, 5, 5]);
        expect(numArray.sumRange(0, 3)).toBe(20); // 5 + 5 + 5 + 5 = 20
        expect(numArray.sumRange(1, 2)).toBe(10); // 5 + 5 = 10
    });

    test("Negative numbers", () => {
        const numArray = new NumArray([-1, -2, -3, -4]);
        expect(numArray.sumRange(0, 3)).toBe(-10); // (-1) + (-2) + (-3) + (-4) = -10
        expect(numArray.sumRange(1, 2)).toBe(-5);  // (-2) + (-3) = -5
    });

    test("Large input", () => {
        const nums = Array(10000).fill(1);
        const numArray = new NumArray(nums);
        expect(numArray.sumRange(0, 9999)).toBe(10000); // Sum of 10,000 ones
        expect(numArray.sumRange(5000, 9999)).toBe(5000); // Sum of 5,000 ones
    });
});
