import { describe, it, expect } from "@jest/globals";
import { CircleQueue } from "./CircleQueue";

describe("CircleQueue", () => {
  it("should initialize correctly", () => {
    const queue = new CircleQueue(3);
    expect(queue.isEmpty()).toBe(true);
    expect(queue.isFull()).toBe(false);
  });

  it("should enqueue elements correctly", () => {
    const queue = new CircleQueue(3);
    expect(queue.enQueue(1)).toBe(true);
    expect(queue.enQueue(2)).toBe(true);
    expect(queue.enQueue(3)).toBe(true);
    expect(queue.enQueue(4)).toBe(false); // Queue is full
  });

  it("should return front and rear correctly", () => {
    const queue = new CircleQueue(3);
    expect(queue.Front()).toBe(-1);
    expect(queue.Rear()).toBe(-1);

    queue.enQueue(1);
    expect(queue.Front()).toBe(1);
    expect(queue.Rear()).toBe(1);

    queue.enQueue(2);
    expect(queue.Front()).toBe(1);
    expect(queue.Rear()).toBe(2);
  });

  it("should dequeue elements correctly", () => {
    const queue = new CircleQueue(3);
    expect(queue.deQueue()).toBe(false); // Queue is empty

    queue.enQueue(1);
    queue.enQueue(2);
    expect(queue.deQueue()).toBe(true);
    expect(queue.Front()).toBe(2);
    expect(queue.deQueue()).toBe(true);
    expect(queue.Front()).toBe(-1);
  });

  it("should correctly handle isEmpty and isFull", () => {
    const queue = new CircleQueue(2);

    expect(queue.isEmpty()).toBe(true);
    expect(queue.isFull()).toBe(false);

    queue.enQueue(1);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.isFull()).toBe(false);

    queue.enQueue(2);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.isFull()).toBe(true);

    queue.deQueue();
    expect(queue.isEmpty()).toBe(false);
    expect(queue.isFull()).toBe(false);

    queue.deQueue();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.isFull()).toBe(false);
  });

  it("should handle wrap-around scenarios", () => {
    const queue = new CircleQueue(3);

    queue.enQueue(1);
    queue.enQueue(2);
    queue.enQueue(3);
    queue.deQueue();
    queue.enQueue(4);

    expect(queue.Front()).toBe(2);
    expect(queue.Rear()).toBe(4);
    expect(queue.isFull()).toBe(true);
  });

  it('should handle empty operations gracefully', () => {
    const queue = new CircleQueue(3);
    expect(queue.Front()).toBe(-1); // Empty queue
    expect(queue.Rear()).toBe(-1); // Empty queue
    expect(queue.deQueue()).toBe(false); // Cannot dequeue from an empty queue
  });

  it('should handle single element enqueue and dequeue', () => {
    const queue = new CircleQueue(1);
    expect(queue.enQueue(10)).toBe(true); // Enqueue 10
    expect(queue.Front()).toBe(10);
    expect(queue.Rear()).toBe(10);
    expect(queue.deQueue()).toBe(true); // Dequeue 10
    expect(queue.isEmpty()).toBe(true);
    expect(queue.Front()).toBe(-1);
    expect(queue.Rear()).toBe(-1);
  });

  it('should handle consecutive enqueues and dequeues', () => {
    const queue = new CircleQueue(2);
    expect(queue.enQueue(1)).toBe(true); // Enqueue 1
    expect(queue.enQueue(2)).toBe(true); // Enqueue 2
    expect(queue.deQueue()).toBe(true); // Dequeue 1
    expect(queue.enQueue(3)).toBe(true); // Enqueue 3
    expect(queue.Front()).toBe(2);
    expect(queue.Rear()).toBe(3);
    expect(queue.isFull()).toBe(true); // Queue should be full
  });

  it('should handle wrap-around edge case', () => {
    const queue = new CircleQueue(3);

    queue.enQueue(1); // [1, _, _]
    queue.enQueue(2); // [1, 2, _]
    queue.enQueue(3); // [1, 2, 3]
    queue.deQueue(); // [_, 2, 3]
    queue.deQueue(); // [_, _, 3]
    queue.enQueue(4); // [4, _, 3]
    queue.enQueue(5); // [4, 5, 3]

    expect(queue.Front()).toBe(3);
    expect(queue.Rear()).toBe(5);
    expect(queue.isFull()).toBe(true);
    expect(queue.deQueue()).toBe(true); // [4, 5, _]
    expect(queue.Front()).toBe(4);
  });

  it('should handle resizing scenarios with small capacity', () => {
    const queue = new CircleQueue(1);

    expect(queue.enQueue(1)).toBe(true);
    expect(queue.isFull()).toBe(true);
    expect(queue.enQueue(2)).toBe(false); // Cannot enqueue when full
    expect(queue.deQueue()).toBe(true); // Dequeue 1
    expect(queue.isEmpty()).toBe(true);
    expect(queue.enQueue(2)).toBe(true); // Enqueue 2
    expect(queue.Front()).toBe(2);
  });

  it('should not break with alternating enqueues and dequeues', () => {
    const queue = new CircleQueue(3);

    expect(queue.enQueue(1)).toBe(true); // [1, _, _]
    expect(queue.deQueue()).toBe(true); // [_, _, _]
    expect(queue.enQueue(2)).toBe(true); // [_, 2, _]
    expect(queue.deQueue()).toBe(true); // [_, _, _]
    expect(queue.enQueue(3)).toBe(true); // [_, _, 3]
    expect(queue.deQueue()).toBe(true); // [_, _, _]
    expect(queue.isEmpty()).toBe(true);
  });

  it('should handle large values and capacities', () => {
    const queue = new CircleQueue(1000);
    for (let i = 0; i < 1000; i++) {
      expect(queue.enQueue(i)).toBe(true);
    }
    expect(queue.isFull()).toBe(true);
    expect(queue.enQueue(1000)).toBe(false); // Cannot enqueue when full

    for (let i = 0; i < 500; i++) {
      expect(queue.deQueue()).toBe(true);
    }
    expect(queue.isFull()).toBe(false);

    for (let i = 0; i < 500; i++) {
      expect(queue.enQueue(i + 1000)).toBe(true);
    }
    expect(queue.isFull()).toBe(true);
  });

  it('should handle the given sequence of operations correctly', () => {
    const queue = new CircleQueue(3);

    // Perform operations and assert expected outcomes
    expect(queue.enQueue(1)).toBe(true);  // return True
    expect(queue.enQueue(2)).toBe(true);  // return True
    expect(queue.enQueue(3)).toBe(true);  // return True
    expect(queue.enQueue(4)).toBe(false); // return False (queue is full)

    expect(queue.Rear()).toBe(3);         // return 3 (last element)
    expect(queue.isFull()).toBe(true);    // return True (queue is full)

    expect(queue.deQueue()).toBe(true);   // return True (successfully dequeued)
    expect(queue.enQueue(4)).toBe(true);  // return True (added element 4)
    expect(queue.Rear()).toBe(4);         // return 4 (last element after enqueue)
  });

  it('should handle the sequence of operations correctly', () => {
    const queue = new CircleQueue(81);

    expect(queue.enQueue(69)).toBe(true);
    expect(queue.deQueue()).toBe(true);
    expect(queue.enQueue(92)).toBe(true);
    expect(queue.enQueue(12)).toBe(true);
    expect(queue.deQueue()).toBe(true);
    expect(queue.isFull()).toBe(false);
    expect(queue.isFull()).toBe(false);
    expect(queue.Front()).toBe(12); // Debug if this fails
    expect(queue.deQueue()).toBe(true);
    expect(queue.enQueue(28)).toBe(true);
    expect(queue.Front()).toBe(28); // Debug if this fails
    expect(queue.enQueue(13)).toBe(true);
    expect(queue.enQueue(45)).toBe(true);
    expect(queue.Rear()).toBe(45); // Debug if this fails
    expect(queue.Rear()).toBe(45);
    expect(queue.deQueue()).toBe(true);
    expect(queue.enQueue(24)).toBe(true);
    expect(queue.enQueue(27)).toBe(true);
    expect(queue.Rear()).toBe(27); // Debug if this fails
    expect(queue.Rear()).toBe(27);
    expect(queue.Front()).toBe(13); // Debug if this fails
    // Continue adding all operations from the test case...
  });
});
