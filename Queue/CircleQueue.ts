export class CircleQueue {
  private queue: any[];
  private size: number;
  private head: number;
  private tail: number;

  constructor(k: number) {
    this.queue = new Array(k);
    this.size = 0;
    this.head = 0;
    this.tail = 0;
  }

  enQueue(value: number): boolean {
    console.log(`enQueue(${value}) called`);
    if (this.isFull()) {
      return false;
    }

    if (this.tail >= this.queue.length - 1 || this.isEmpty()) {
      this.tail = 0;
    } else {
      this.tail++;
    }

    this.queue[this.tail] = value;
    this.size++;

    return true;
  }

  deQueue(): boolean {
    console.log(`deQueue called`);
    if (this.isEmpty()) {
      return false;
    }

    this.queue[this.head] = undefined;
    this.size--;

    if (this.head >= this.queue.length - 1) {
      this.head = 0;
    } else {
      this.head++;
    }

    return true;
  }

  Front(): number {
    if (this.isEmpty()) {
      return -1;
    }

    return this.queue[this.head];
  }

  Rear(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.queue[this.tail];
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  isFull(): boolean {
    return this.size === this.queue.length;
  }

  print(): void {
    let str = "queue: \n";
    str += `current size: ${this.size} \n`;
    str += `max size: ${this.queue.length} \n`;
    str += `isEmpty: ${this.isEmpty()} \n`;
    str += `isFull: ${this.isFull()} \n`;
    str += `Front: ${this.Front()} \n`;
    str += `Rear: ${this.Rear()} \n`;
    str += `head: queue[${this.head}] \n`;
    str += `tail: queue[${this.tail}] \n`;
    console.log(str);
    this.printContents();
    console.log("\n");
  }

  printContents(): void {
    let str: string = "";
    for (let i = 0; i < this.queue.length; i++) {
      const val = isNaN(this.queue[i]) ? "_" : this.queue[i];
      str += val + " ";
    }
    console.log(str);
  }
}

const queue = new CircleQueue(3);
console.log("NEW QUEUE:");
queue.print();

queue.enQueue(1);
queue.printContents();

queue.enQueue(2);
queue.printContents();

queue.enQueue(3);
queue.print();

queue.deQueue();
queue.print();

queue.deQueue();
queue.print();

queue.deQueue();
queue.print();


queue.enQueue(1);
queue.print();

queue.enQueue(2);
queue.print();

queue.enQueue(3);
queue.print();

queue.enQueue(4);
queue.print();
