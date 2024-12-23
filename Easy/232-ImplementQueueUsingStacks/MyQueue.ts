export class MyQueue {
    private inputStack: number[]; // Stack for pushing new elements
    private outputStack: number[]; // Stack for popping/peeking elements

    constructor() {
        this.inputStack = [];
        this.outputStack = [];
    }

    push(x: number): void {
        // Push new elements directly to the input stack
        this.inputStack.push(x);
    }

    pop(): number {
        if (this.empty()) {
            throw new Error("Cannot pop an empty queue!");
        }

        // Transfer elements to outputStack if it is empty
        if (this.outputStack.length === 0) {
            while (this.inputStack.length > 0) {
                this.outputStack.push(this.inputStack.pop()!);
            }
        }
        // Pop from the outputStack (FIFO behavior)
        return this.outputStack.pop()!;
    }

    peek(): number {
        if (this.empty()) {
            throw new Error("Cannot peek an empty queue!");
        }

        // Transfer elements to outputStack if it is empty
        if (this.outputStack.length === 0) {
            while (this.inputStack.length > 0) {
                this.outputStack.push(this.inputStack.pop()!);
            }
        }
        // Peek the top of the outputStack (FIFO behavior)
        return this.outputStack[this.outputStack.length - 1];
    }

    empty(): boolean {
        // The queue is empty if both stacks are empty
        return this.inputStack.length === 0 && this.outputStack.length === 0;
    }
}

/**
 * Example usage:
 * const myQueue = new MyQueue();
 * myQueue.push(1);
 * myQueue.push(2);
 * console.log(myQueue.peek()); // Output: 1
 * console.log(myQueue.pop());  // Output: 1
 * console.log(myQueue.empty()); // Output: false
 */
