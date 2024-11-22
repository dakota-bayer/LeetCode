function mergeSort(nums: number[]): void {
  if (nums.length <= 1) {
    return;
  }

  let left: number[] = [];
  let right: number[] = [];

  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i < nums.length / 2) {
      left[i] = nums[i];
    } else {
      right[j] = nums[i];
      j++;
    }
  }

  mergeSort(left);
  mergeSort(right);
  merge(nums, left, right);
}

function merge(nums: number[], left: number[], right: number[]): void {
  let l = 0;
  let r = 0;
  let k = 0;
  while (l < left.length && r < right.length) {
    if(left[l] <= right[r]){
        nums[k] = left[l];
        l++;
    }
    else{
        nums[k] = right[r];
        r++;
    }
    k++;
  }

  while(l < left.length) {
    nums[k] = left[l];
    l++;
    k++;
  }

  while(r < right.length ){
    nums[k] = right[r];
    r++;
    k++;
  }
}

let nums = [1, 9, 4, 8, 2, 4, 3, 5];
console.log(`unsorted = ${nums}`);
mergeSort(nums);
console.log(`sorted = ${nums}`);
