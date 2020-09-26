var   { BinarySearchTree }              = require ('./DataStructure/Tree/BinaryTree');
var   { BinarySearchTreeNode }          = require ('./DataStructure/Tree/BinaryTree');
var   { initBinarySearchTree }          = require ('./util');
var   { BinarySearch }                  = require ('./Search/BinarySearch');
var   { genRandomNumber }               = require ('./util/index');
var   { insertionSort }                 = require ('./Sorting/InsertionSort/insertion.sort');
var   { quickSort }                     = require ('./Sorting/QuickSort/quick.sort');
var   { mergerSort }                    = require ('./Sorting/MergeSort/merger.sort');



var     tree    = new BinarySearchTree ();

initBinarySearchTree (tree, 10, 7);

// tree.inOrderTranverse ((val) => console.log (val));
// console.log (tree.min ());
// console.log (tree.search (2));

// tree.remove (10);
// console.log ('--------');
// tree.inOrderTranverse ((val) => console.log (val));

var randNums = genRandomNumber (10);
console.log (randNums)

randNums = mergerSort (randNums);

console.log (randNums)