import { majorityElement } from './majorityElement';

describe('majorityElement', () => {
    test('Example 1: Majority element in small array', () => {
        // Input: nums = [3,2,3]
        // Output: 3
        expect(majorityElement([3, 2, 3])).toBe(3);
    });

    test('Example 2: Majority element in a larger array', () => {
        // Input: nums = [2,2,1,1,1,2,2]
        // Output: 2
        expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
    });

    test('Edge Case 1: Single element array', () => {
        // Input: nums = [1]
        // Output: 1
        expect(majorityElement([1])).toBe(1);
    });

    test('Edge Case 2: Array with all identical elements', () => {
        // Input: nums = [7,7,7,7,7]
        // Output: 7
        expect(majorityElement([7, 7, 7, 7, 7])).toBe(7);
    });

    test('Custom Case 1: Array with two unique elements', () => {
        // Input: nums = [8,8,8,9,9]
        // Output: 8 (8 appears 3 times, > n/2 where n=5)
        expect(majorityElement([8, 8, 8, 9, 9])).toBe(8);
    });

    test('Custom Case 2: Array with multiple occurrences', () => {
        // Input: nums = [1,2,3,3,3,2,3,3]
        // Output: 3 (3 appears 5 times, > n/2 where n=8)
        expect(majorityElement([1, 2, 3, 3, 3, 2, 3, 3])).toBe(3);
    });

    test('Edge Case 3: Large array with majority element at the start', () => {
        const nums = Array(50001).fill(4).concat(Array(1000).fill(5));
        // Majority element: 4 (appears > n/2)
        expect(majorityElement(nums)).toBe(4);
    });

    test('Edge Case 4: Large array with majority element at the end', () => {
        const nums = Array(1000).fill(6).concat(Array(50001).fill(7));
        // Majority element: 7 (appears > n/2)
        expect(majorityElement(nums)).toBe(7);
    });
});
