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
    if (this.isEmpty()) {
      return false;
    }

    this.queue[this.head] = undefined;
    this.size--;

    if (this.head >= this.queue.length - 1 || this.isEmpty()) {
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
    let str = "------------- ----------- ----------- ---------- \n";
    str += `current size: ${this.size}     -     max size: ${this.queue.length}\n`;
    str += `isEmpty: ${this.isEmpty()}    -    isFull: ${this.isFull()} \n`;
    str += `Front: queue[${this.head}]    -    ${this.Front()} \n`;
    str += `Rear: queue[${this.tail}]   -   ${this.Rear()}`;
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
/*
const queue = new CircleQueue(7);

queue.enQueue(69);
queue.print();

queue.deQueue();
queue.print();

queue.enQueue(92);
queue.print();

queue.enQueue(12);
queue.print();

queue.deQueue();
queue.print();

queue.isFull();
queue.isFull();

queue.print();
*/
