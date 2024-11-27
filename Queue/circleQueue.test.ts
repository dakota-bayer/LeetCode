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
});
