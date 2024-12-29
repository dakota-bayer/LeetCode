import { findDuplicates } from "./findDuplicates";

describe("findDuplicates", () => {
    it("should return [2, 3] for input [4,3,2,7,8,2,3,1]", () => {
        const nums = [4, 3, 2, 7, 8, 2, 3, 1];
        const result = findDuplicates(nums);
        expect(result.sort()).toEqual([2, 3]);
    });

    it("should return [1] for input [1,1,2]", () => {
        const nums = [1, 1, 2];
        const result = findDuplicates(nums);
        expect(result).toEqual([1]);
    });

    it("should return an empty array for input [1]", () => {
        const nums = [1];
        const result = findDuplicates(nums);
        expect(result).toEqual([]);
    });

    it("should return an empty array for input with no duplicates", () => {
        const nums = [1, 2, 3, 4, 5];
        const result = findDuplicates(nums);
        expect(result).toEqual([]);
    });
    
    /*
    it("should handle large arrays with duplicates", () => {
        const nums = Array.from({ length: 100000 }, (_, i) => (i % 50000) + 1);
        const result = findDuplicates(nums);
        expect(result.sort()).toEqual(Array.from({ length: 50000 }, (_, i) => i + 1));
    });
    */

    it("should handle arrays with all elements duplicated", () => {
        const nums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
        const result = findDuplicates(nums);
        expect(result.sort()).toEqual([1, 2, 3, 4, 5]);
    });

    it("should handle arrays with consecutive duplicates", () => {
        const nums = [1, 1, 2, 2, 3, 3];
        const result = findDuplicates(nums);
        expect(result.sort()).toEqual([1, 2, 3]);
    });

    it("should handle arrays with no duplicates and single element", () => {
        const nums = [1];
        const result = findDuplicates(nums);
        expect(result).toEqual([]);
    });

    it("should handle empty array", () => {
        const nums: number[] = [];
        const result = findDuplicates(nums);
        expect(result).toEqual([]);
    });
});
