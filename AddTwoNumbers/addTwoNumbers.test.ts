// ListNode and addTwoNumbers are assumed to be in './addTwoNumbers.ts'

import { ListNode, addTwoNumbers } from "./addTwoNumbers";

// Helper function to create a linked list from an array
function createLinkedList(arr: number[]): ListNode | null {
  let dummy: ListNode = new ListNode();
  let current: ListNode = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to convert linked list to an array
function linkedListToArray(list: ListNode | null): number[] {
  let arr: number[] = [];
  while (list !== null) {
    arr.push(list.val);
    list = list.next;
  }
  return arr;
}

describe("addTwoNumbers", () => {
  test("Example 1: adds [2,4,3] and [5,6,4]", () => {
    const l1 = createLinkedList([2, 4, 3]);
    const l2 = createLinkedList([5, 6, 4]);
    const result = addTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual([7, 0, 8]);
  });

  test("Example 2: adds [0] and [0]", () => {
    const l1 = createLinkedList([0]);
    const l2 = createLinkedList([0]);
    const result = addTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual([0]);
  });

  test("Example 3: adds [9,9,9,9,9,9,9] and [9,9,9,9]", () => {
    const l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
    const l2 = createLinkedList([9, 9, 9, 9]);
    const result = addTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
  });

  test("Test with carry over across multiple digits", () => {
    const l1 = createLinkedList([9, 9, 9]);
    const l2 = createLinkedList([1]);
    const result = addTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual([0, 0, 0, 1]);
  });

  test("Test with lists of different lengths", () => {
    const l1 = createLinkedList([2, 4]);
    const l2 = createLinkedList([5, 6, 4]);
    const result = addTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual([7, 0, 5]);
  });

  test("Test with a long number", () => {
    const l1 = createLinkedList([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
    const l2 = createLinkedList([5, 6, 4]);
    const result = addTwoNumbers(l1, l2);
    result?.print();
    expect(linkedListToArray(result)).toEqual([6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
  })
});
