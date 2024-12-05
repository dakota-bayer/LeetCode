import { describe, it, expect, beforeEach } from '@jest/globals';
import { MinStack } from './MinStack';

describe('MinStack', () => {
  let minStack: MinStack;

  beforeEach(() => {
    minStack = new MinStack();
  });

  it('should initialize an empty stack', () => {
    expect(() => minStack.top()).toThrowError(); // Adjust if the implementation defines behavior for empty stack
    expect(() => minStack.getMin()).toThrowError();
  });

  it('should push and retrieve elements correctly', () => {
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);

    expect(minStack.getMin()).toBe(-3); // Minimum is -3
    expect(minStack.top()).toBe(-3); // Top is -3
  });

  it('should pop elements and update the minimum correctly', () => {
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);

    minStack.pop();
    expect(minStack.getMin()).toBe(-2); // Minimum is updated to -2
    expect(minStack.top()).toBe(0); // Top is updated to 0
  });

  it('should handle multiple operations correctly', () => {
    minStack.push(1);
    minStack.push(2);
    minStack.push(-1);
    minStack.push(-2);

    expect(minStack.getMin()).toBe(-2); // Minimum is -2
    minStack.pop();
    expect(minStack.getMin()).toBe(-1); // Minimum is updated to -1
    minStack.pop();
    expect(minStack.getMin()).toBe(1); // Minimum is updated to 1
  });

  it('should handle edge cases like duplicates', () => {
    minStack.push(2);
    minStack.push(2);
    minStack.push(1);
    minStack.push(1);

    expect(minStack.getMin()).toBe(1); // Minimum is 1
    minStack.pop();
    expect(minStack.getMin()).toBe(1); // Minimum is still 1
    minStack.pop();
    expect(minStack.getMin()).toBe(2); // Minimum is updated to 2
  });

  it('should handle large inputs within constraints', () => {
    for (let i = 0; i < 30000; i++) {
      minStack.push(i);
    }
    expect(minStack.getMin()).toBe(0); // Minimum should remain the smallest element
    for (let i = 0; i < 30000; i++) {
      minStack.pop();
    }
    expect(() => minStack.getMin()).toThrowError(); // Stack is now empty
  });
});
