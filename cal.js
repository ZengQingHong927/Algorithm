var   { BinarySearchTreeNode, BinarySearchTree }        = require ('./DataStructure/Tree/BinaryTree');
var   { initBinarySearchTree }                          = require ('./util');


var     tree    = new BinarySearchTree ();

initBinarySearchTree (tree, 10, 7);

tree.inOrderTranverse ((val) => console.log (val));
// console.log (tree.min ());
// console.log (tree.search (2));

// tree.remove (10);
// console.log ('--------');
// tree.inOrderTranverse ((val) => console.log (val));