
class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(headname) {
        let head = Symbol(headname);
        this[head] = null;
    }
}

const linkedlist = new LinkedList('headname');
console.log(linkedlist);