var {LinkedList} = require ('../LinkedList/LinkedList');
var {LinkedListNode} = require ('../LinkedList/LinkedList');

class DoubleLinkedListNode extends LinkedListNode {
        constructor (data) {
                super (data);
                this.prev = null;
        }
}

class DoubleLinkedList extends LinkedList {
        constructor () {
                super ();
                this.tail = null;
        }

        append (node) {
                let current = this.head;
                if (current == null) {
                    this.head = node;
                    this.tail = node;
                    this.length += 1;
                    return this;
                }
        
                while (current.next !== null) {
                    current = current.next;
                }
                current.next = node;
                node.prev = current;
                this.tail = node;
                this.length += 1;
                return this;
        }

        insertAt (node, index) {
                if (index >= 0 && index <= this.length-1) {
                        let current = this.head;
                        if (index === 0) {
                                if (this.head === null) {
                                        this.head = node;
                                        this.tail = node;
                                }
                                else {
                                        current.prev = node;
                                        node.next = current;
                                        this.head = node;
                                }
                        }
                        // else if (index === this.length-1) {
                        //         current = this.tail;
                        //         current.next = node;
                        //         node.prev = current;
                        //         this.tail = node;
                        // }
                        else {
                                let prev = this.find (index-1);
                                current = prev.next;
                                node.next = current;
                                current.prev = node;
                                node.prev = prev;
                                prev.next = node;
                        }
                        this.length += 1;
                        return this;
                }

                return false;
        }

        removeAt (index) {
                if (index > 0 && index <= this.length-1) {
                        let current = this.head;
                        if (index === 0) {
                                this.head = current.next;
                                if (this.length == 1) {
                                        this.tail = null;
                                }
                                else {
                                        this.head.prev = null;
                                }
                                this.length -= 1;
                        }
                        else if (index === this.length -1) {
                                current = this.tail;
                                this.tail = current.prev;
                                this.tail.next = null;
                        } else {
                                current = this.find (index);
                                let prev = current.prev;
                                prev.next = current.next;
                                current.next.prev = prev;
                        }
                        this.length -= 1;
                        return current;
                }
                return false;
        }
}

var doublelinkedlist = new DoubleLinkedList ();

var node = new DoubleLinkedListNode (10);
doublelinkedlist.append (node);

var node = new DoubleLinkedListNode (20);
doublelinkedlist.append (node);


var node = new DoubleLinkedListNode (1000);
doublelinkedlist.insertAt (node, 1);


var node = new DoubleLinkedListNode (2000);
doublelinkedlist.insertAt (node, 2);

console.log(doublelinkedlist.toString ());

console.log (doublelinkedlist.removeAt (1));

console.log(doublelinkedlist.toString ());