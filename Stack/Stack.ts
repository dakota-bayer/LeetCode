import { Node } from "../Shared/Node";

export class Stack<T> {
  private head: Node<T> | null;

  constructor() {
    this.head = null;
  }

  push(val: T): void {
    const node = new Node(val);
    node.next = this.head;
    this.head = node;
  }

  pop(): T {
    if (!this.head) {
      throw new Error("Cannot pop an empty stack!");
    }

    const node = this.head;
    this.head = this.head.next;
    node.next = null;

    return node.val;
  }

  peek(): T {
    if (!this.head) {
      throw new Error("Cannot peek an empty stack!");
    }

    return this.head.val;
  }

  isEmpty(): boolean {
    return !this.head;
  }

  getCount(): number {
    let current = this.head;
    let count = 0;

    while (current) {
      current = current.next;
      count++;
    }

    return count;
  }

  clear(): void {
    this.head = null;
  }

  contains(val: T): boolean {
    let current = this.head;

    while (current) {
      if (current.val === val) {
        return true;
      }

      current = current.next;
    }

    return false;
  }
}
