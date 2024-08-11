class Queue {
  #items = [];

  // A constructor method if not using private variables (may be needed for older JS implementations)
  // constructor() {
  //   this.items = [];
  // }

  get isEmpty() {
    return this.#items.length === 0;
  }

  enqueue(element) {
    this.#items.push(element);
  }

  get dequeue() {
    if (this.isEmpty) {
      return 'Queue is empty';
    } else {
      return this.#items.shift();
    }
  }

  get size() {
    if (this.isEmpty) {
      return 'Queue is empty';
    } else {
      return this.#items.length;
    }
  }

  get peek() {
    if (this.isEmpty) {
      return 'Queue is empty';
    } else {
      return this.#items[0];
    }
  }

  get print() {
    if (this.isEmpty) {
      return 'Queue is empty';
    } else {
      return this.#items.join(', ');
    }
  }
}

export { Queue };
