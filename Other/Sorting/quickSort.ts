import { Sorter } from "./Sorter";

export class QuickSort<T> implements Sorter<T> {
  sort(data: T[]) {
    this.sortInternal(data, 0, data.length - 1);
  }

  private sortInternal(data: T[], left: number, right: number): void {
    if (left >= right) {
      return;
    }

    let pivot = data[Math.floor((left + right) / 2)];
    let index = this.partition(data, left, right, pivot);
    this.sortInternal(data, left, index - 1);
    this.sortInternal(data, index, right);
  }

  private partition(data: T[], left: number, right: number, pivot: T): number {
    while (left <= right) {
      while (data[left] < pivot) {
        left++;
      }
      while (data[right] > pivot) {
        right--;
      }
      if (left <= right) {
        this.swap(data, left++, right--);
      }
    }

    return left;
  }

  private swap(data: T[], index1: number, index2: number) {
    const temp = data[index1];
    data[index1] = data[index2];
    data[index2] = temp;
  }
}

// let nums = [1, 9, 4, 8, 2, 4, 3, 5];
// console.log(`unsorted = ${nums}`);
// const sorter = new QuickSort<number>();
// sorter.sort(nums);
// console.log(`sorted = ${nums}`);
