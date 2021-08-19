class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top?.value;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.bottom = this.top = newNode;
        } else {
            this.bottom.next = newNode;
            this.bottom = newNode;
        }

        this.length++;
    }

    dequeue() {
        if (this.length === 0) {
            return undefined;
        }

        const val = this.top.value;
        this.top = this.top.next;

        this.length--;
        if (length === 0) {
            this.bottom = null;
        }

        return val;
    }

    isEmpty() {
        return this.length === 0;
    }
}