import { containsDuplicate } from './containsDuplicates';

describe("test if array contains a duplicate", () => {
    test("Example 1: no duplicates found", () => {
        const result = containsDuplicate([1, 2, 3, 4]);
        expect(result).toBe(false);
    });
    test("Example 2: does contain one duplicate", () => {
        const result = containsDuplicate([1, 2, 3, 4, 1]);
        expect(result).toBe(true);
    });
    test("Example 3: contains multiple duplicates", () => {
        const result = containsDuplicate([1, 1, 2, 3, 4, 4, 1]);
        expect(result).toBe(true);
    });
    test("Example 4: empty set", () => {
        const result = containsDuplicate([]);
        expect(result).toBe(false);
    });
});