
var   { defaultCompareFn }              = require ('../../util');
var   { LESS_THAN }                     = require ('../../util');
var   { BIGGER_THAN }                   = require ('../../util');
var   { swap }                          = require ('../../util');

/**
 * 二叉堆是一種特殊二叉樹，包含兩個特性，1: 完全二叉樹，2: 所有節點得值大於（小於）其左右子節點的值
 */


class MinHeap {
        constructor (compareFn = defaultCompareFn) {
                this.compareFn  = compareFn;
                this.heap       = [];
        }

        /**
         * 
         * @param {number} index 
         */
        getLeftIndex (index) {
                return 2*index+1;
        }

        /**
         * 
         * @param {number} index 
         */
        getRightIndex (index) {
                return 2*index+2;
        }

        /**
         * 
         * @param {number} index 
         */
        getParentIndex (index) {
                if (index === 0)        return undefined;

                return Math.floor ((index-1)/2);
        }

        /**
         * 
         * @param {number} key 
         */
        insert (key) {
                if (key != null) {
                        this.heap[this.heap.length]     = key;
                        this.siftUp (this.heap.length-1);
                        return true;
                }

                return false;
        }

        /**
         * 
         * @param {number} index 
         */
        siftUp (index) {
                let     parent  = this.getParentIndex (index);

                while (index > 0 && this.compareFn (this.heap[parent], this.heap[index]) === BIGGER_THAN) {
                        swap (this.heap, parent, index);
                        index   = parent;
                        parent  = this.getParentIndex (index);
                }
        }

        size () {
                return this.heap.length;
        }

        isEmpty () {
                return this.size () === 0;
        }

        extract () {
                if (this.isEmpty ())    return undefined;
                
                if (this.size () === 1) return this.heap.shift ();

                let     removedKey      = this.heap.shift ();
                this.siftDown (0);
                return removedKey;
        }

        findMinumum () {
                return this.isEmpty () ? undefined : this.heap[0];                
        }

        /**
         * 
         * @param {number} index 
         */
        siftDown (index) {
                let     element = index;
                let     left    = this.getLeftIndex (index);
                let     right   = this.getRightIndex (index);
                let     size    = this.size ();

                if (left > size && this.compareFn (this.heap[index], this.heap[left] === BIGGER_THAN)) {
                        element = left;
                }

                if (right > size && this.compareFn (this.heap[index], this.heap[right] === BIGGER_THAN)) {
                        element = right;
                }

                if (element !== index) {
                        swap (this.heap, index, element);
                        this.siftDown (element);
                }
                
        }
}

module.exports = {
        MinHeap,
}