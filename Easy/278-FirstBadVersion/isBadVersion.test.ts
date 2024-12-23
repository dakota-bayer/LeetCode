import { solution } from './isBadVersion';

describe("First Bad Version", () => {
    test("Example 1: n = 5, bad = 4", () => {
        const isBadVersion = jest.fn((version: number) => version >= 4);
        const findFirstBadVersion = solution(isBadVersion);
        expect(findFirstBadVersion(5)).toBe(4);
        expect(isBadVersion).toHaveBeenCalledTimes(3); // Minimizes calls
    });

    test("Example 2: n = 1, bad = 1", () => {
        const isBadVersion = jest.fn((version: number) => version >= 1);
        const findFirstBadVersion = solution(isBadVersion);
        expect(findFirstBadVersion(1)).toBe(1);
        //expect(isBadVersion).toHaveBeenCalledTimes(1); // Only one call needed
    });

    test("Edge Case: n = 10, bad = 10", () => {
        const isBadVersion = jest.fn((version: number) => version >= 10);
        const findFirstBadVersion = solution(isBadVersion);
        expect(findFirstBadVersion(10)).toBe(10);
    });

    test("Edge Case: n = 10, bad = 1", () => {
        const isBadVersion = jest.fn((version: number) => version >= 1);
        const findFirstBadVersion = solution(isBadVersion);
        expect(findFirstBadVersion(10)).toBe(1);
    });

    test("Large Input: n = 2^31 - 1, bad = 2^31 - 1", () => {
        const maxInt = Math.pow(2, 31) - 1;
        const isBadVersion = jest.fn((version: number) => version >= maxInt);
        const findFirstBadVersion = solution(isBadVersion);
        expect(findFirstBadVersion(maxInt)).toBe(maxInt);
    });
});
