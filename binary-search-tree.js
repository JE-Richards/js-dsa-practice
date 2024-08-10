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
    if (startingNode.data === null) {
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
}
