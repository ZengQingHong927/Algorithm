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

    isEmpty () {
        return this.size() === 0;
    }

    append (node) {
        let current = this.head;
        if (current == null) {
            this.head = node;
        }
        else {
            while (current !== null && current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
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
        return false;
    }

    removeAt (index) {
        if (index >= 0 && index < this.length ) {
            let current = this.head;

            if (index == 0) {
                this.head = current.next;
                this.length -= 1;
            }
            else {
                let prev;
                let i = 0;
                // while (i < index) {
                //     prev = current;
                //     current = current.next
                //     i++;
                // }
                prev = this.find (index-1);
                if (prev.next === null)     return undefined;
                current = prev.next;
                prev.next = current.next;
                this.length -= 1;
                return current;
            }

        }
        return undefined;
    }

    insertAt (node, index) {
        if (index >= 0 && index < this.length) {
            let current = this.head;
            if (index === 0) {
                node.next = current;
                this.head = node;
            }
            else {
                let prev = this.find (index -1);
                current = prev.next;
                node.next = current;
                prev.next = node;
            }
            this.length += 1;
            return true
        }

        return undefined;
    }

    toString() {
        if (this.head == null) {
            return '';
        }
        let linkedListString = `${this.head.data}`;
        let current = this.head.next;
        while (current !== null) {
            linkedListString = `${linkedListString}, ${current.data}`;
            current = current.next;
        }
        return linkedListString;
    }

    updateAt (index, val) {
        if (typeof val === 'undefined')     return;

        if (index < 0 || index > this.length) {
            return undefined;
        }

        let target;

        target = this.find (index);

        target.data = val;

        return target;
    }

    reverse () {
    
        let prev = null;
        let current = this.head;
        let next = null;
    
        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
        return true;
    }
}

// var node = new LinkedListNode (10);
// var linklist = new LinkedList ();

// linklist.append (node);

// var node2 = new LinkedListNode (20);
// linklist.append (node2);

// var node3 = new LinkedListNode (30);
// linklist.append (node3);

// var node4 = new LinkedListNode (40);
// linklist.append (node4);

// var node5 = new LinkedListNode (100);
// linklist.insertAt (node5, 1);

// console.log (linklist.find(1));
// console.log (linklist.removeAt (2));
// console.log (linklist.toString ());

module.exports = {
    LinkedListNode,
    LinkedList
};