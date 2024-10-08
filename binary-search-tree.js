import { Queue } from './queue';

// node class for use in the binary search tree
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // user accessible method to insert data
  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.#insertNode(this.root, newNode);
    }
  }

  // private helper method to call inside of insert() method
  #insertNode(currentNode, newNode) {
    if (newNode.data < currentNode.data) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        this.#insertNode(currentNode.left, newNode);
      }
    } else if (newNode.data > currentNode.data) {
      if (currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        this.#insertNode(currentNode.right, newNode);
      }
    }
  }

  // user accessible method to search if a node exists in the tree and return it
  search(data) {
    return this.#searchNode(this.root, data);
  }

  // private helper method to be called by search()
  #searchNode(startingNode, data) {
    if (startingNode === null) {
      return null;
    }

    if (data < startingNode.data) {
      return this.#searchNode(startingNode.left, data);
    } else if (data > startingNode.data) {
      return this.#searchNode(startingNode.right, data);
    } else {
      return startingNode;
    }
  }

  // user accessible methods to find the minimum and maximum values in the tree
  minimum() {
    return this.#findMinNode(this.root);
  }

  maximum() {
    return this.#findMaxNode(this.root);
  }

  // private method to find the minimum node in a tree - useful when removing nodes
  #findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.#findMinNode(node.left);
    }
  }

  // private method to find the maximum node in a tree
  #findMaxNode(node) {
    if (node.right === null) {
      return node;
    } else {
      return this.#findMaxNode(node.right);
    }
  }

  // user accessible method to remove a node
  remove(data) {
    this.root = this.#removeNode(this.root, data);
  }

  // private helper method to search if a node exists in the tree, remove it, and maintain structure of the tree
  #removeNode(currentNode, data) {
    // if tree is empty do nothing
    if (currentNode === null) {
      return null;
    }

    // Use recursion to traverse the tree to find if the node to remove
    if (data < currentNode.data) {
      currentNode.left = this.#removeNode(currentNode.left, data);
    } else if (data > currentNode.data) {
      currentNode.right = this.#removeNode(currentNode.right, data);
    } else {
      // else the node is found so we need to handle how the node is removed

      // Case 1: Node is a leaf (has no children)
      if (currentNode.left === null && currentNode.right === null) {
        return null;
      }

      // Case 2: Node has a single child
      if (currentNode.left === null) {
        return currentNode.right; // replace the node with the right child
      } else if (currentNode.right === null) {
        return currentNode.left; // replace the node with the left child
      }

      // current node has 2 children - removal needs to ensure that the tree retains the properties of a binary search tree
      // Start by finding the in-order successor (the smallest child node in the right subtree)
      const minNode = this.#findMinNode(currentNode.right);
      currentNode.data = minNode.data;

      // Recursively remove the in-order successor
      currentNode.right = this.#removeNode(currentNode.right, minNode.data);
    }
    return currentNode;
  }

  // Public traversal functions that always start from the root node
  preOrder(callback) {
    return this.#preOrderTraversal(this.root, callback);
  }

  inOrder(callback) {
    return this.#inOrderTraversal(this.root, callback);
  }

  postOrder(callback) {
    return this.#postOrderTraversal(this.root, callback);
  }

  levelOrder(callback) {
    const queue = new Queue();

    queue.enqueue(this.root);

    while (queue.size > 0) {
      let currentNode = queue.dequeue;
      callback(currentNode.data);

      if (currentNode.left !== null) {
        queue.enqueue(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.enqueue(currentNode.right);
      }
    }
  }

  // Private traversal functions that can start from any node
  #preOrderTraversal(node, callback) {
    if (node !== null) {
      callback(node.data);
      this.#preOrderTraversal(node.left, callback);
      this.#preOrderTraversal(node.right, callback);
    }
  }

  #inOrderTraversal(node, callback) {
    if (node !== null) {
      this.#inOrderTraversal(node.left, callback);
      callback(node.data);
      this.#inOrderTraversal(node.right, callback);
    }
  }

  #postOrderTraversal(node, callback) {
    if (node !== null) {
      this.#postOrderTraversal(node.left, callback);
      this.#postOrderTraversal(node.right, callback);
      callback(node.data);
    }
  }
}
