class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
class LinkedList {
    constructor(value) {
      if (value != null) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
      }
    }
  
    append(...args) {
      args.forEach(value => {
        const newVal = new Node(value);
        if (!this.tail) {
          this.head = newVal;
        } else {
          this.tail.next = newVal;
        }
        this.tail = newVal;
        this.length++;
      });
    }
  
    prepend(...args) {
      args.forEach(value => {
        const newVal = new Node(value);
        newVal.next = this.head;
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
        this.length--;
        return true;
      }
  
      const prevNode = this._getNodeAtPrevIndex(index);
      prevNode.next = prevNode.next.next;
      if (prevNode.next == null) {
        this.tail = prevNode;
      }
      this.length--;
      return true;
    }
  
    reverse() {
      const newList = new LinkedList();
  
      let currentNode = this.head;
      while(currentNode != null) {
        newList.prepend(currentNode.value);
        currentNode = currentNode.next;
      }
  
      return newList;
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
      prevNode.next = newNode;
      this.length++;
    }
  
    toString() {
      const vals = [];
      let node = this.head;
      while (node != null) {
        vals.push(node.value);
        node = node.next;
      }
      return vals.join('-->');
    }
}
