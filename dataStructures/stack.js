class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class StackLinkedList {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    peek() {
        return this.top?.value;
    }

    pop() {
        const val = this.top?.value;
        if (this.top) {
            this.top = this.top.next;
            this.length--;
        }
        return val;
    }

    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
    }

    isEmpty() {
        return this.length === 0;
    }
}

class StackArray {
    constructor() {
        this.data = [];
        this.length = 0;
    }

    peek() {
        if (this.length == 0) {
            return null;
        }

        return this.data[this.length-1];
    }

    pop() {
        if (this.length == 0) {
            return null;
        }

        const val = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return val;
    }

    push(value) {
        this.data[this.length++] = value;
    }

    isEmpty() {
        return this.length === 0;
    }
}