// 1 --> 2 --> 3 --> 4 --> null

let singlyLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};

class Node {
  constructor(value, next = null){
      this.value = value;
      this.next = next; 
  }
}

class SinglyLinkedList {
        constructor(initialValue){
          this.head = new Node(initialValue);
          this.tail = this.head;
          this.length = 1;
        }

        append(value){
            const node = new Node(value);
            this.tail.next = node;
            this.tail = node;
           this.length++;
           return this;
        }
        prepend(value){
          const node = new Node(value, this.head);
          this.head = node;
          this.length++;
        }
}

const linkedList = new SinglyLinkedList(1);
linkedList.append(2);
linkedList.append(3);
console.log(linkedList);