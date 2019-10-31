url https://humanwhocodes.com/blog/2019/01/computer-science-in-javascript-linked-list/
var head = Symbol('head');
// List[head] = 'First Node';

class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// const head = new LinkedListNode(88);
// head.next = new LinkedListNode(99);
// head.next.next = new LinkedListNode(100);

// let current = head;

// while(current !== null) {
//     console.log(current.data);
//     current = current.next;
// }

class LinkedList {
    constructor() {
        this[head] = null;
    }

    add(data) {
        const newNode = new LinkedListNode(data);

        if (this[head] == null) {
            this[head] = newNode;
        } else {
            let current = this[head];

            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    get(index) {
        if (index > -1) {
            let current = this[head];

            let i = 0;

            while((current !== null) && (i < index)) {
                // console.log(current)
                current = current.next;
                i++;
            }

            return current !== null ? current.data : undefined;
        } else {
            return undefined;
        }
    }

    remove(index) {

        if ((this[head] === null) || (index < 0)) {
            throw `Index ${index} node is not found`;
        }

        if (index === 0) {
            const data = this[head].data;
            this[head] = this[head].next;
            return data;
        }

        let current = this[head];
        let prev = null;
        let i = 0;
        while((current !== null) && (i < index)) {
            prev = current;
            current = current.next;
            i++
        }

        if (current !== null) {
            prev.next = current.next
            return current.data;
        }
        throw `Index ${index} node is not found`;
    }

    length() {
        if (this[head] === null) {
            return 0;
        }

        let current = this[head];
        let i = 0;
        while(current !== null) {
            current = current.next;
            i++;
        }

        return i;
    }
}

const linklist = new LinkedList();
linklist.add(66);
linklist.add(77);
linklist.add(88);
linklist.add(99);
linklist.add(100);

// let current = linklist[head];
// while (current.next != null) {
//     console.log(current.data);
//     current = current.next;
// }

console.log(linklist.remove(3));
console.log(linklist.get(3));
console.log(linklist.length());