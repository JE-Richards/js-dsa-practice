class Queue {
  #items = [];

  // A constructor method if not using private variables (may be needed for older JS implementations)
  // constructor() {
  //   this.items = [];
  // }

  isEmpty() {
    return this.#items.length === 0;
  }

  enqueue(element) {
    this.#items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    } else {
      return this.#items.shift();
    }
  }

  size() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    } else {
      return this.#items.length;
    }
  }

  peek() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    } else {
      return this.#items[0];
    }
  }

  print() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    } else {
      return this.#items.join(', ');
    }
  }
}
