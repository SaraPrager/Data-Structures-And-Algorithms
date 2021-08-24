class Node {
    constructor(value) {
        this.right = null;
        this.left = null;
        this.value = value;
    }
}
  
class BinarySearchTree {
    constructor() {
      this.root = null;
    }

    insert(value) {
        if (this.root == null) {
            this.root = new Node(value);
            return;
        }

        const newNode = new Node(value);
        let currentNode = this.root;
        while(currentNode) {
            if (currentNode.value > value) {
                if (currentNode.left == null) {
                    currentNode.left = newNode;
                    break;
                }
                currentNode = currentNode.left;
            } else {
                if (currentNode.right == null) {
                    currentNode.right = newNode;
                    break;
                }
                currentNode = currentNode.right;
            }
        }
    }

    lookup(value) {
        let currentNode = this.root;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            if (currentNode.value > value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return undefined;
    }

    remove(value) {
        let currentNode = this.root;
        let parentNode = null;
        let isLeftChild = false;
        while (currentNode) {
            if (currentNode.value === value) {
                this._removeNode(currentNode, parentNode, isLeftChild)
                return;
            }

            parentNode = currentNode;
            if (currentNode.value > value) {
                currentNode = currentNode.left;
                isLeftChild = true;
            } else {
                currentNode = currentNode.right;
                isLeftChild = false;
            }
            
        }
    }

    _removeLeaf(parentNode, isLeftChild) {
      // The root is the leaf to remove:
      if (parentNode == null) {
        this.root = null;
        return;
      }

      if (isLeftChild) {
        parentNode.left = null;
      } else {
        parentNode.right = null;
      }
    }

    _removeNode(node, parentNode, isLeftChild) {
        let leafToTake;
        let leafParent = parentNode;
        let isLeftLeaf = false;
        
        // A leaf
        if (node.right == null && node.left == null) {
          return this._removeLeaf(parentNode, isLeftChild)
        }

        // First step to right, unless is null, then go to left
        if (node.right) {
            leafToTake = node.right;
            leafParent = node;
        } else {
            leafToTake = node.left;
            leafParent = node;
            isLeftLeaf = true;
        }

        // Go the the most left leaf
        while (leafToTake.left) {
            leafToTake = leafToTake.left;
            leafParent = leafToTake;
            isLeftLeaf = true;
        }

        // If there is a parent to the node that should be removed, connect this parent with the new chosen leaf
        if (parentNode) {
            if (isLeftChild) {
                parentNode.left = leafToTake;
            } else {
                parentNode.right = leafToTake;
            }
        } else { // If there is no parent, it means that the node to remove is the root
          this.root = leafToTake;
        }

        if (node.left !== leafToTake) {
          leafToTake.left = node.left;
        }

        if (isLeftLeaf) {
            leafParent.left = null;
        } else {
            leafParent.right = null;
        }
    }
}