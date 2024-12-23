import { MyQueue } from "./MyQueue";

describe("MyQueue", () => {
    test("Example 1: Basic operations", () => {
        const myQueue = new MyQueue();

        myQueue.push(1); // queue: [1]
        myQueue.push(2); // queue: [1, 2]

        expect(myQueue.peek()).toBe(1); // front of the queue is 1
        expect(myQueue.pop()).toBe(1); // removes 1, queue becomes [2]
        expect(myQueue.empty()).toBe(false); // queue is not empty
    });

    test("Push and pop multiple elements", () => {
        const myQueue = new MyQueue();

        myQueue.push(10); // queue: [10]
        myQueue.push(20); // queue: [10, 20]
        myQueue.push(30); // queue: [10, 20, 30]

        expect(myQueue.pop()).toBe(10); // removes 10, queue becomes [20, 30]
        expect(myQueue.pop()).toBe(20); // removes 20, queue becomes [30]
        expect(myQueue.peek()).toBe(30); // front of the queue is 30
        expect(myQueue.empty()).toBe(false); // queue is not empty
        expect(myQueue.pop()).toBe(30); // removes 30, queue becomes []
        expect(myQueue.empty()).toBe(true); // queue is empty
    });

    test("Empty queue operations", () => {
        const myQueue = new MyQueue();

        expect(myQueue.empty()).toBe(true); // queue is empty
        expect(() => myQueue.pop()).toThrow(); // should throw because queue is empty
        expect(() => myQueue.peek()).toThrow(); // should throw because queue is empty
    });

    test("Push and pop interleaved operations", () => {
        const myQueue = new MyQueue();

        myQueue.push(5); // queue: [5]
        expect(myQueue.pop()).toBe(5); // removes 5, queue becomes []
        myQueue.push(10); // queue: [10]
        myQueue.push(15); // queue: [10, 15]
        expect(myQueue.peek()).toBe(10); // front of the queue is 10
        expect(myQueue.pop()).toBe(10); // removes 10, queue becomes [15]
        expect(myQueue.empty()).toBe(false); // queue is not empty
        expect(myQueue.pop()).toBe(15); // removes 15, queue becomes []
        expect(myQueue.empty()).toBe(true); // queue is empty
    });

    test("Large number of operations", () => {
        const myQueue = new MyQueue();

        for (let i = 1; i <= 100; i++) {
            myQueue.push(i); // queue: [1, 2, ..., 100]
        }

        for (let i = 1; i <= 100; i++) {
            expect(myQueue.peek()).toBe(i); // front of the queue is i
            expect(myQueue.pop()).toBe(i); // removes i
        }

        expect(myQueue.empty()).toBe(true); // queue is empty
    });
});
