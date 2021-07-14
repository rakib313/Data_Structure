class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        
    }
    get() { return this.value; }
    set(value) { this.value = value }

    get() { return this.next }
    set(next) { this.next = next }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    get() { return this.head; }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index, value) {
        let count = 1;
        let currentNode = this.head;
        // check params
        if (index >= this.length || index < 0) {
            return "Bar index value";
        }
        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }
        if (index === 0) {
            let newNode = new Node(value);
            newNode.next = currentNode
            this.head = newNode;
            this.length++;
        }
        else {
            let newNode = new Node(value);
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
        this.length++;
    }
    remove(index) {
        if (index >= this.length || index < 0) {
            return "Bar index value";
        }
        const leader = this.treverseToIndex(index-1);
        if (index === 0) {
            this.head = leader.next;
            this.length--;
        }
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this;
    }
    treverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        if (index < 0) {
            return currentNode;
        }
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++
        }
        return currentNode;
    }

// * * * *
}
// 1-->10-->5-->15
const myLiskedList = new LinkedList(10);
myLiskedList.append(5);
myLiskedList.append(15);
myLiskedList.prepend(1);
console.log(myLiskedList);
let ins = myLiskedList.insert(1, 99); // Input: (index, value)

console.log(ins);
console.log(myLiskedList.printList());
//console.log(myLiskedList);

myLiskedList.remove(0);
console.log(myLiskedList.printList());

