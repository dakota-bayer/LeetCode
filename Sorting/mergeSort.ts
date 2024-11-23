import { Sorter } from "./Sorter";

export class MergeSort<T> implements Sorter<T> {
  sort(data: T[]): void {
    if (data.length <= 1) {
      return;
    }

    let left: T[] = [];
    let right: T[] = [];

    for (let i = 0, j = 0; i < data.length; i++) {
      if (i < data.length / 2) {
        left[i] = data[i];
      } else {
        right[j++] = data[i];
      }
    }

    this.sort(left);
    this.sort(right);
    this.merge(data, left, right);
  }

  merge(data: T[], left: T[], right: T[]): void {
    let l = 0,
      r = 0,
      k = 0;

    while (l < left.length && r < right.length) {
      if (left[l] < right[r]) {
        data[k] = left[l++];
      } else {
        data[k] = right[r++];
      }
      k++;
    }
    while (l < left.length) {
      data[k++] = left[l++];
    }
    while (r < right.length) {
      data[k++] = right[r++];
    }
  }
}

// let nums = [1, 9, 4, 8, 2, 4, 3, 5];
// console.log(`unsorted = ${nums}`);
// const sorter = new MergeSort<number>();
// sorter.sort(nums);
// console.log(`sorted = ${nums}`);
