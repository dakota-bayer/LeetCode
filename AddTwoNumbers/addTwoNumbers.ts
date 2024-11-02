/*
2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
  Input: l1 = [2,4,3], l2 = [5,6,4]
  Output: [7,0,8]
  Explanation: 342 + 465 = 807.

Example 2:
  Input: l1 = [0], l2 = [0]
  Output: [0]

Example 3:
  Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
  Output: [8,9,9,9,0,0,0,1]
 

Constraints:
  The number of nodes in each linked list is in the range [1, 100].
  0 <= Node.val <= 9
  It is guaranteed that the list represents a number that does not have leading zeros.
 */

let isLogging = false;

export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }

  print() {
    let str: string = this.val.toString();
    let current: ListNode = this;
    while (current.next) {
      current = current.next;
      str += current.val.toString();
    }
    if (isLogging) {
      console.log(str);
    }
  }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let value1Str = getString(l1);
  let value2Str = getString(l2);

  let value1: bigint = BigInt(value1Str);
  let value2: bigint = BigInt(value2Str);
  let sum: bigint = value1 + value2;

  if (isLogging) {
    console.log(`sum: ${sum}`);
  }

  let reverseSum = reverseString(sum.toString());

  if (isLogging) {
    console.log(`reverse sum: ${reverseSum}`);
  }

  return buildNode(reverseSum);
}

function getString(node: ListNode | null): string {
  if (isLogging) {
    console.log(`entering getNumberFromNode(${node})`);
  }

  if (!node) {
    return "0";
  }

  const numArray: number[] = [];
  let i: number = 0;
  do {
    numArray[i++] = node!.val;
    node = node!.next;
  } while (node);

  numArray.reverse();

  let str = numArray.join("");

  return str;
}

function buildNode(num: string): ListNode {
  if (isLogging) {
    console.log(`entering buildNode(${num})`);
  }

  let head: ListNode = new ListNode(0);
  let previous: ListNode | null = null;

  for (let i = 0; i < num.length; i++) {
    let current = new ListNode();
    current.val = parseInt(num.charAt(i));

    if (previous) {
      previous.next = current;
    } else {
      head = current;
    }

    previous = current;
  }

  return head;
}

function reverseString(str: string): string {
  if (isLogging) {
    console.log(`entering reverseString(${str})`);
  }

  if (str.length == 0) {
    return "0";
  }

  let reversed: string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }

  return reversed;
}

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

const l1 = createLinkedList([2, 4, 3]);
const l2 = createLinkedList([5, 6, 4]);

// const l1 = createLinkedList([0]);
// const l2 = createLinkedList([0]);

// const l1 = createLinkedList([9, 9, 9]);
// const l2 = createLinkedList([1]);

// const l1 = createLinkedList([
//   1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 1,
// ]);
// const l2 = createLinkedList([5, 6, 4]);

// const l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
// const l2 = createLinkedList([9, 9, 9, 9]);

const result = addTwoNumbers(l1, l2);
result?.print();
