class LinkedListNode {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
        this.length = 0;
    }

    size () {
        return this.length;
    }

    append (node) {
        let current = this.head;
        if (current == null) {
            this.head = node;
            this.length += 1;
            return this;
        }

        while (current.next !== null) {
            current = current.next;
        }
        current.next = node;
        this.length += 1;
        return this;
    }

    find (index) {
        if (index >= 0 && index < this.length) {
            let i = 0;
            let current = this.head;
            while (i < index) {
                current = current.next;
                i += 1;
            }
            return current;
        }
        return undefined;
    }

    remove (index) {
        if (index >= 0 && index < this.length ) {
            let current = this.head;

            if (index == 0) {
                this.head = current.next;
                this.length -= 1;
            }
            else {
                let prev;
                let i = 0;
                while (i < index) {
                    prev = current;
                    current = current.next
                    i++;
                }
                prev.next = current.next;
                this.length -= 1;
                return current;
            }

        }
        return undefined;
    }
}

var node = new LinkedListNode (10);
var linklist = new LinkedList ();
// console.log (node);

linklist.append (node);

var node2 = new LinkedListNode (20);
linklist.append (node2);

var node3 = new LinkedListNode (30);
linklist.append (node3);

var node4 = new LinkedListNode (40);
linklist.append (node4);

// console.log (linklist.remove (2));
console.log (linklist.find (5));