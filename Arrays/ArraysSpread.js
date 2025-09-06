// Arrays Spread

// Remember the spread syntax for merging object properties ?
/*
*   It works with arrays too! It expands the elements of an array into individual
*   elements and inserts them into another array.
* */

const nums=[1,2,3];
const newNums=[...nums,4,5,6];
console.log(newNums);
//[1,2,3,4,5,6]

