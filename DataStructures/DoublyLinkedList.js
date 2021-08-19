class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(...args) {
        args.forEach(value => {
            const newVal = new Node(value);
            this.tail.next = newVal;
            newVal.prev = this.tail;
            this.tail = newVal;
            this.length++;
        });
    }

    prepend(...args) {
        args.forEach(value => {
            const newVal = new Node(value);
            newVal.next = this.head;
            this.head.prev = newVal;
            this.head = newVal;
            this.length++;
        });
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false;
        }

        if (index === 0) {
            this.prepend(value);
            return true;
        }

        if (index === this.length) {
            this.append(value);
            return true;
        }

        const prevNode = this._getNodeAtPrevIndex(index);
        if (prevNode) {
            this._insertAfterNode(prevNode, value);
            return true;
        }

        return false;
    }

    remove(index) {
        if (index < 0 || index > this.length-1) {
            return false;
        }

        if (index === 0) {
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            return true;
        }

        const prevNode = this._getNodeAtPrevIndex(index);
        const nextNode = prevNode.next.next;
        prevNode.next = nextNode;
        if (prevNode.next == null) {
            this.tail = prevNode;
        } else {
            nextNode.prev = prevNode;
        }
        this.length--;
        return true;
    }

    _getNodeAtPrevIndex(index) {
        if (index <= 0 || index > this.length) {
            return undefined;
        }

        let currentIndex = 0;
        let prevNode = this.head;
        while(prevNode != null) {
            if (currentIndex === index-1) {
                return prevNode;
            }
            prevNode = prevNode.next;
            currentIndex++;
        }
        return undefined;
    }

    _insertAfterNode(prevNode, value) {
        const newNode = new Node(value);
        newNode.next = prevNode.next;
        newNode.prev = prevNode;
        prevNode.next = newNode;
        this.length++;
    }

    toString() {
        const vals = [];
        let node = this.head;
        while (node != null) {
            let str = `${node.value}`;
            if (node.prev) {
                str += `, prev: ${node.prev.value}`;
            }
            if (node.next) {
                str += `, next: ${node.next.value}`;
            }
            vals.push(str);
            node = node.next;
        }
        return vals.join('-->');
    }
}
  