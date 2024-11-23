export function binarySearch<T>(input: T[], target: T) : number {
  // Returns the index of a target element in a sorted array
  // Returns -1 if target element not found in input array

  if(!input){
    return -1;
  }


  let left = 0;
  let right = input.length -1;

  while(left <= right) {
    let current = Math.floor((left + right) / 2);
    if(input[current] == target) {
        return current;
    }

    if(input[current] > target) {
        // Search lower half
        right = current - 1;
    }
    else{
        // Search upper half
        left = current + 1;
    }
  }

    return -1;
}

// const array = [1, 3, 5, 7, 9, 11];
// console.log(array);
// let result = binarySearch(array, 5);
// console.log(result);
