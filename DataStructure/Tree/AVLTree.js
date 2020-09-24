var   { BinarySearchTree,
        BinarySearchTreeNode }          = require ('./BinaryTree');

var   { defaultCompareFn,
        LESS_THAN,
        BIGGER_THAN,
        UNBALANCED_RIGHT,
        SLIGHTLY_UNBALANCED_RIGHT,
        BALANCED,
        SLIGHTLY_UNBALANCED_LEFT,
        UNBALANCED_LEFT }               = require ('../../util');



class AVLTree extends BinarySearchTree {
        constructor (compareFn = defaultCompareFn) {
                super (compareFn);
                this.compareFn  = compareFn;
                this.root       = null;
        }

        getNodeHeight (node) {
                if (node === null) {
                        return -1;
                }
                return Math.max (this.getNodeHeight (node.left), this.getNodeHeight (node.right)) + 1;
        }

        getNodeBalancedFactor (node) {
                let     heightDiff      = this.getNodeHeight (node.left) - this.getNodeHeight (node.right);

                switch (heightDiff) {
                        case 2: {
                                return UNBALANCED_LEFT;
                        }
                        case 1: {
                                return SLIGHTLY_UNBALANCED_LEFT;
                        }
                        case -1: {
                                return SLIGHTLY_UNBALANCED_RIGHT;
                        }
                        case -2: {
                                return UNBALANCED_RIGHT;
                        }
                        default: {
                                return BALANCED;
                        }
                }
        }

        rotationLL (node) {
                let     tmp     = node.left;
                node.left       = tmp.right;
                tmp.right       = node;
                return tmp;
        }

        rotationRR (node) {
                let     tmp     = node.right;
                node.right      = tmp.left;
                tmp.left        = node;
                return tmp;
        }

        rotationLR (node) {
                node.left       = this.rotationRR (node.left);
                return this.rotationLL (node);
        }

        rotationRL (node) {
                node.right      = this.rotationLL (node.right);
                return this.rotationRR (node);
        }

        insert (key) {
                this.root       = this.insertNode (this.root, key);
        }

        insertNode (node, key) {
                if (node === null) {
                        return new BinarySearchTreeNode (key)
                }
                else if (this.compareFn (key, node.key) === LESS_THAN) {
                        node.left       = this.insertNode (node.left, key);
                }
                else if (this.compareFn (key, node.key) === BIGGER_THAN) {
                        node.right      = this.insertNode (node.right, key);
                }
                else {
                        return;
                }
                let     balancedFactor  = this.getNodeBalancedFactor (node);
                if (balancedFactor === UNBALANCED_LEFT) {
                        if (this.compareFn (key, node.left.key) === LESS_THAN) {
                                node    = this.rotationLL (node);
                        }
                        else {
                                node    = this.rotationLR (node);
                        }
                }
                if (balancedFactor === UNBALANCED_RIGHT) {
                        if (this.compareFn (key, node.right.key) === BIGGER_THAN) {
                                node    = this.rotationRR (node);
                        }
                        else {
                                node    = this.rotationRL (node);
                        }
                }

                return node;
        }

        remove (key) {
                this.root       = this.removeNode (this.root, key);
        }

        removeNode (node ,key) {
                node    = super.removeNode (node, key);
                if (node === null) {
                        return node;
                }
                let     balancedFactor  = this.getNodeBalancedFactor (node);
                if (balancedFactor === UNBALANCED_LEFT) {
                        let     balancedFactorLeft      = this.getNodeBalancedFactor (node.left);
                        if (balancedFactorLeft === BALANCED || balancedFactorLeft === SLIGHTLY_UNBALANCED_LEFT) {
                                node    = this.rotationLL (node);
                        }
                        else if (balancedFactorLeft === SLIGHTLY_UNBALANCED_RIGHT) {
                                node    = this.rotationLR (node.left);  // ? node.left
                        }
                }

                if (balancedFactor === UNBALANCED_RIGHT) {
                        let     balancedFactorRight     = this.getNodeBalancedFactor (node.right);
                        if (balancedFactorRight === BALANCED || balancedFactorRight === SLIGHTLY_UNBALANCED_RIGHT) {
                                node    = this.rotationRR (node);
                        }
                        else if (balancedFactorRight === SLIGHTLY_UNBALANCED_LEFT) {
                                node    = this.rotationRL (node.right); // ? node.right
                        }
                }

                return node;
        
        }
}


module.exports = {
        AVLTree,
}