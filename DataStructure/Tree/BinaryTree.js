var   { defaultCompareFn }              = require ('../../util');
var   { LESS_THAN }                     = require ('../../util');
var   { LESS_THAN, BIGGER_THAN }        = require ('../../util');

class BinarySearchTree {
        constructor (compareFn = defaultCompareFn) {
                this.root       = null;
                this.compareFn  = compareFn;
        }

        /**
         * 
         * @param {number} key 
         */
        insert (key) {
                // console.log ('insert...');
                if (this.root === null) {
                        this.root = new BinarySearchTreeNode (key);
                }
                else {
                        this.insertNode (this.root, key);
                }
        }

        /**
         * 
         * @param {BinarySearchTreeNode} node 
         * @param {number} key 
         */
        insertNode (node, key) {
                if (this.compareFn (key, node.key) === LESS_THAN) {
                        if (node.left === null) {
                                node.left = new BinarySearchTreeNode (key);
                        }
                        else {
                                this.insertNode (node.left, key);
                        }
                }
                else if (this.compareFn (key, node.key) === BIGGER_THAN) {
                        if (node.right === null) {
                                node.right = new BinarySearchTreeNode (key);
                        }
                        else {
                                this.insertNode (node.right, key);
                        }
                }
                else {
                        return;
                }
        }

        /**
         * 
         * @param {number} key 
         */
        search (key) {
                if (typeof key !== 'number')    return 'type error';        
        
                return this.searchNode (this.root, key);
        }

        /**
         * 
         * @param {BinarySearchTreeNode} node 
         * @param {number} key 
         */
        searchNode (node, key) {
                if (node === null) {
                        return false;
                }
                else if (this.compareFn (key, node.key) === LESS_THAN) {
                        return this.searchNode (node.left, key);
                }
                else if (this.compareFn (key, node.key) === BIGGER_THAN) {
                        return this.searchNode (node.right, key);
                }
                else {
                        return true;
                }
        }

        min () {
                if (this.root !== null) {
                        return this.minNode (this.root);
                }
                else {
                        return this.root;
                }
        
        }

        /**
         * 
         * @param {BinarySearchTreeNode} node 
         */
        minNode (node) {
                let     current = node;
                while (current !== null && current.left !== null) {
                        current = current.left;
                }

                return current;
        }

        max () {
                if (this.root !== null) {
                        return this.maxNode (this.root);
                }
                else {
                        return this.root;
                }
        }

        /**
         * 
         * @param {BinarySearchTreeNode} node 
         */
        maxNode (node) {
                let     current = node;
                while (current !== null && current.right !== null) {
                        current = current.right;
                }

                return current;
        }

        /**
         * 
         * @param {number} key 
         */
        remove (key) {
                this.root = this.removeNode (this.root, key);
        }

        /**
         * 
         * @param {BinarySearchTreeNode} node 
         * @param {number} key 
         */
        removeNode (node, key) {
                if (node === null) {
                        return null;
                }
                else if (this.compareFn (key, node.key) === LESS_THAN) {
                        node.left       = this.removeNode (node.left, key);
                        return node;
                }
                else if (this.compareFn (key, node.key) === BIGGER_THAN) {
                        node.right      = this.removeNode (node.right, key);
                        return node;
                }
                else {
                        if (node.left === null && node.right === null) {
                                node    = null;
                                return node;
                        }
                        else if (node.left === null) {
                                node    = node.right;
                                return node;
                        }
                        else if (node.right === null) {
                                node    = node.left;
                                return node;
                        }
                        else {
                                let aux         = this.minNode (node.right);
                                node.key        = aux.key;
                                node.right      = this.removeNode (node.right, aux.key);
                                return node;
                        }
                }
        }

        /**
         * 
         * @param {function} cb 
         */
        inOrderTranverse (cb) {
                if (this.root !== null) {
                        this.inOrderTranverseNode (this.root, cb);
                }
                else {
                        cb (this.root)
                }
        }

        /**
         * 
         * @param {BinarySearchTreeNode} node 
         * @param {function} cb 
         */
        inOrderTranverseNode (node, cb) {
                if (node !== null) {
                        this.inOrderTranverseNode (node.left, cb);
                        cb(node.key);
                        this.inOrderTranverseNode (node.right, cb);
                }
        }

        /**
         * 
         * @param {function} cb 
         */
        preOrderTranverse (cb) {
                if (this.root !== null) {
                        this.preOrderTranverseNode (this.root, cb);
                }
                else {
                        cb (this.root);
                }
        }

        /**
         * 
         * @param {BinarySearchTreeNode} node 
         * @param {function} cb 
         */
        preOrderTranverseNode (node, cb) {
                if (node !== null) {
                        cb (node.key);
                        this.preOrderTranverseNode (node.left, cb);
                        this.preOrderTranverseNode (node.right, cb);
                }
        }

        /**
         * 
         * @param {function} cb 
         */
        postOrderTranverse (cb) {
                if (this.root !== null) {
                        this
                }
                else {
                        cb (this.node);
                }
        }

        /**
         * 
         * @param {BinarySearchTreeNode} node 
         * @param {function} cb 
         */
        postOrderTranverseNode (node, cb) {
                if (node !== null) {
                        this.postOrderTranverseNode (node.left, cb);
                        this.postOrderTranverseNode (node.right, cb);
                        cb (node.key);
                }
        }

}

class BinarySearchTreeNode {
        constructor (key) {
                this.key        = key;
                this.left       = null;
                this.right      = null;
        }
}


module.exports = {
    BinarySearchTreeNode,
    BinarySearchTree,
};