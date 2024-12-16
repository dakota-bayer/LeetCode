import { Stack } from './Stack'; // Adjust the import based on your file structure

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  test('should start empty', () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getCount()).toBe(0);
  });

  test('should push items onto the stack', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.getCount()).toBe(2);
  });

  test('should pop items from the stack', () => {
    stack.push(1);
    stack.push(2);
    const poppedValue = stack.pop();
    expect(poppedValue).toBe(2);
    expect(stack.getCount()).toBe(1);
    expect(stack.peek()).toBe(1);
  });

  test('should throw an error when popping from an empty stack', () => {
    expect(() => stack.pop()).toThrow('Cannot pop an empty stack!');
  });

  test('should peek the top item without removing it', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.getCount()).toBe(2); // Ensure count remains the same
  });

  test('should throw an error when peeking an empty stack', () => {
    expect(() => stack.peek()).toThrow('Cannot peek an empty stack!');
  });

  test('should correctly determine if the stack contains an item', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.contains(1)).toBe(true);
    expect(stack.contains(2)).toBe(true);
    expect(stack.contains(3)).toBe(false);
  });

  test('should clear the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.clear();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getCount()).toBe(0);
  });

  test('should maintain correct order of items', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBe(true);
  });

  test('should handle multiple data types', () => {
    const stringStack = new Stack<string>();
    stringStack.push("one");
    stringStack.push("two");
    expect(stringStack.pop()).toBe("two");
    expect(stringStack.contains("one")).toBe(true);
    expect(stringStack.contains("three")).toBe(false);
  });
});
