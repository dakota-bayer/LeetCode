export function quickSort(nums: number[]): number[] {
  quickSortInternal(nums, 0, nums.length - 1);
  return nums;
}

function quickSortInternal(nums: number[], left: number, right: number): void {
  if (left >= right) {
    return;
  }

  let pivot: number = nums[Math.floor((left + right) / 2)];
  let index: number = partition(nums, left, right, pivot);
  quickSortInternal(nums, left, index - 1);
  quickSortInternal(nums, index, right);
}

function partition(
  nums: number[],
  left: number,
  right: number,
  pivot: number
): number {
  while (left <= right) {
    while (nums[left] < pivot) {
      left++;
    }
    while (nums[right] > pivot) {
      right--;
    }
    if (left <= right) {
      swap(nums, left, right);
      left++;
      right--;
    }
  }
  return left;
}

function swap(nums: number[], left: number, right: number) {
  let temp = nums[left];
  nums[left] = nums[right];
  nums[right] = temp;
}

//let unsorted = [1, 9, 4, 8, 2, 4, 3, 5];
//console.log(`unsorted = ${unsorted}`);
//let sorted = quickSort(unsorted);
//console.log(`sorted = ${sorted}`);
