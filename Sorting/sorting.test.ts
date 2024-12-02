import { QuickSort } from "./quickSort";
import { Sorter } from "./Sorter";
import { MergeSort } from "./mergeSort";

const sorters: Sorter<number>[] = [
  new MergeSort<number>(),
  new QuickSort<number>(),
];

const testCases = [
  {
    description: "an array of positive numbers",
    input: [3, 6, 8, 10, 1, 2, 1],
    expected: [1, 1, 2, 3, 6, 8, 10],
  },
  {
    description: "an array of negative numbers",
    input: [-3, -6, -8, -10, -1, -2, -1],
    expected: [-10, -8, -6, -3, -2, -1, -1],
  },
  {
    description: "an array with both positive and negative numbers",
    input: [3, -6, 8, -10, 1, -2, 0],
    expected: [-10, -6, -2, 0, 1, 3, 8],
  },
  { description: "an empty array", input: [], expected: [] },
  { description: "an array with a single element", input: [5], expected: [5] },
  {
    description: "an array with duplicate numbers",
    input: [4, 2, 4, 2, 4, 1],
    expected: [1, 2, 2, 4, 4, 4],
  },
  {
    description: "an already sorted array",
    input: [1, 2, 3, 4, 5],
    expected: [1, 2, 3, 4, 5],
  },
  {
    description: "a reverse sorted array",
    input: [5, 4, 3, 2, 1],
    expected: [1, 2, 3, 4, 5],
  },
  {
    description: "an array with all identical elements",
    input: [7, 7, 7, 7],
    expected: [7, 7, 7, 7],
  },
];

for (let sorter of sorters) {
  describe(`Tests for ${sorter.constructor.name}`, () => {
    for (const { description, input, expected } of testCases) {
      test(`should sort ${description}`, () => {
        const arrayToSort = [...input]; // Clone to avoid modifying the original array
        sorter.sort(arrayToSort);
        expect(arrayToSort).toEqual(expected);
      });
    }
  });
}
