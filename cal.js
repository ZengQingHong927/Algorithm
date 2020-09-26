var   { BinarySearchTree }              = require ('./DataStructure/Tree/BinaryTree');
var   { BinarySearchTreeNode }          = require ('./DataStructure/Tree/BinaryTree');
var   { initBinarySearchTree }          = require ('./util');
var   { BinarySearch }                  = require ('./Search/BinarySearch');

var     tree    = new BinarySearchTree ();

initBinarySearchTree (tree, 10, 7);

// tree.inOrderTranverse ((val) => console.log (val));
// console.log (tree.min ());
// console.log (tree.search (2));

// tree.remove (10);
// console.log ('--------');
// tree.inOrderTranverse ((val) => console.log (val));

// var idxTarget = BinarySearch ([5, 2, 0, 2, 9, 3], 2);

// console.log (idxTarget);
