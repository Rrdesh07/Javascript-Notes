// Slicing Arrays

//  Javascript's .slice() method makes it easy to well ,
//  slice and dice arrays:

const animals=["ant","dog","cat","camel","tiger"];
console.log(animals);

console.log(animal.slice(2)) // --> ["cat","camel","tiger"] --> if you give only start and no end it will take till last element.
console.log(animal.slice(2,3));//--> ["cat"] it excludes the last index

// you can also give negative numbers  --> -1 starts as last elements
// animals.slice(-2) --> ["camel","tiger"]
// animals.slice(2,-1) --> ["camel","duck"]
// animals.slice() --> ["ant","dog","cat","camel","tiger"]


/*
*   The first argument is the starting index, and the second argument is the
*   ending index. If the second argument is omitted , the slice goes to the end
*   to the array.
*
*   Javascript doesn't support negative negative indexing directly into arrays.
* */