import { merge } from './merge'; // Replace with the actual path to your function file

describe('merge', () => {
    test('merges overlapping values correctly', () => {
        const nums1 = [1, 2, 3, 0, 0, 0];
        const m = 3;
        const nums2 = [2, 5, 6];
        const n = 3;

        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
    });

    test('handles case where nums2 is empty', () => {
        const nums1 = [2, 1];
        const m = 2;
        const nums2: number[] = [];
        const n = 0;

        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1, 2]);
    });

    test('handles case where nums1 is empty', () => {
        const nums1 = [0];
        const m = 0;
        const nums2 = [1];
        const n = 1;

        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1]);
    });

    test('merges with all elements from nums2 smaller than nums1', () => {
        const nums1 = [4, 5, 6, 0, 0, 0];
        const m = 3;
        const nums2 = [1, 2, 3];
        const n = 3;

        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('merges with all elements from nums2 greater than nums1', () => {
        const nums1 = [1, 2, 3, 0, 0, 0];
        const m = 3;
        const nums2 = [4, 5, 6];
        const n = 3;

        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('handles case where both nums1 and nums2 contain negative values', () => {
        const nums1 = [-3, -2, -1, 0, 0, 0];
        const m = 3;
        const nums2 = [-6, -5, -4];
        const n = 3;

        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([-6, -5, -4, -3, -2, -1]);
    });

    test('handles case where nums2 is larger than nums1', () => {
        const nums1 = [2, 0, 0];
        const m = 1;
        const nums2 = [1, 3];
        const n = 2;

        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1, 2, 3]);
    });

    test('handles case where nums1 contains all zeros initially', () => {
        const nums1 = [0, 0, 0];
        const m = 0;
        const nums2 = [1, 2, 3];
        const n = 3;

        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1, 2, 3]);
    });

    test('handles large arrays', () => {
        const nums1 = Array.from({ length: 100 }, (_, i) => i + 1).concat(Array(100).fill(0));
        const m = 100;
        const nums2 = Array.from({ length: 100 }, (_, i) => i + 101);
        const n = 100;

        merge(nums1, m, nums2, n);
        expect(nums1).toEqual(Array.from({ length: 200 }, (_, i) => i + 1));
    });
});