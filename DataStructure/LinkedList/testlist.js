var { LinkedListNode, LinkedList } = require ('./LinkedList');

var myLinkedList = new LinkedList ();

var node1 = new LinkedListNode (10);
var node2 = new LinkedListNode (30);
var node3 = new LinkedListNode (20);
var node4 = new LinkedListNode (100);
var node5 = new LinkedListNode (80);
var node6 = new LinkedListNode (200);

myLinkedList.append (node1);
myLinkedList.append (node2);
myLinkedList.append (node3);
myLinkedList.append (node4);
myLinkedList.append (node5);


console.log (myLinkedList.find(2));
// console.log (myLinkedList.removeAt (2));
myLinkedList.insertAt (node6, 2);
console.log (myLinkedList.find(2));
console.log (myLinkedList.reverse ());
console.log (myLinkedList.toString ());