var   { BinarySearchTree }              = require ('../DataStructure/Tree/BinaryTree');
var   { BinarySearchTreeNode }          = require ('../DataStructure/Tree/BinaryTree');

var     LESS_THAN                               = -1;
var     BIGGER_THAN                             = 1;
var     TYPE_ERROR                              = 'type error';
var     UNBALANCED_LEFT                         = 2;
var     SLIGHTLY_UNBALANCED_LEFT                = 1;
var     BALANCED                                = 0;
var     SLIGHTLY_UNBALANCED_RIGHT               = -1;
var     UNBALANCED_RIGHT                        = -2;

var     defaultCompareFn                = function (a, b)
{

        if (typeof a !== 'number' || typeof b !== 'number')    return TYPE_ERROR;

        if (a === b)   return 0;

        return a > b ? BIGGER_THAN : LESS_THAN;
};

var     compareNode                     = function (node, key)
{

        if (typeof key !== 'number' || typeof node.key !== 'number')    return TYPE_ERROR;

        if (node.key === key)   return 0;

        return node.key > key ? BIGGER_THAN : LESS_THAN;
};

/**
 * 
 * @param {BinarySearchTree} tree 
 * @param {number} nodenum 
 * @param {number} limitnum 
 */

var     initBinarySearchTree            = function (tree, nodenum, limitnum)
{

        if (nodenum > limitnum) return;
        for (let i = 0 ; i < nodenum ; i++) {
                let     nodeKey;
                do {
                        nodeKey = Math.ceil (Math.random () * limitnum);
                        if (!tree.search (nodeKey))      break;
                } while (1);

                tree.insert (nodeKey);
        }
};

module.exports = {
        compareNode,
        defaultCompareFn,
        BIGGER_THAN,
        LESS_THAN,
        UNBALANCED_LEFT,
        SLIGHTLY_UNBALANCED_LEFT,
        BALANCED,
        SLIGHTLY_UNBALANCED_RIGHT,
        UNBALANCED_RIGHT,
        initBinarySearchTree,
};