var {LinkedList} = require ('../LinkedList/LinkedList');
var {LinkedListNode} = require ('../LinkedList/LinkedList');

class CircularLinkedList extends LinkedList {
        constructor () {
                super ();
        }

        append (node) {
                let current = this.head;
                if (current == null) {
                        this.head = node;
                        node.next = this.head;
                        this.length += 1;
                        return this;
                }
        
                while (current.next !== this.head) {
                        console.log (current);
                        current = current.next;
                }
                node.next = this.head;
                current.next = node;
                this.length += 1;
                return this;
        }
        toString() {
                if (this.head == null) {
                    return '';
                }
                let linkedListString = `${this.head.data}`;
                let current = this.head.next;
                while (current !== this.head) {
                    linkedListString = `${linkedListString}, ${current.data}`;
                    current = current.next;
                }
                return linkedListString;
        }

        insertAt (node, index) {
                if (index >= 0 && index <= this.length -1) {
                        let current = this.head;
                        if (index === 0) {
                                if (this.head === null) {
                                        this.head = node;
                                        node.next = this.head;
                                        this.length += 1;
                                }
                                else {
                                        node.next = current;
                                        this.head = node;
                                        current = find (this.length-1);
                                        current.next = this.head;
                                }
                        }
                        else {
                                let prev = this.find (index-1);
                                node.next = prev.next;
                                prev.next = node;
                        }
                        this.length += 1;
                        return true;
                }
                return false;
        }
}

var circularlinkedlist = new CircularLinkedList ();
var node1 = new LinkedListNode (10);
var node2 = new LinkedListNode (20);
var node3 = new LinkedListNode (30);
circularlinkedlist.append (node1);
circularlinkedlist.append (node2);
circularlinkedlist.append (node3);
console.log (circularlinkedlist);
console.log (circularlinkedlist.find(1));
console.log(circularlinkedlist.toString ());