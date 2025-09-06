// Sets

/*
*   Javascript added support for sets (still waiting on you to do same ,Golang)
*   A set is just a collection of unique values. Sets are fantastic for de-duplication
*   and checking if a value exists in a collection.s
* */

const set = new Set([1,2,2,2,3,4,4,5,6]);
console.log(set);
// {1,2,3,4,5,6}

// Notice that all duplicate instances of 2 and 4 were removed from the set.
// You can also add and delete values dynamically:

const newSet=new Set();
newSet.add("rohan");
newSet.add("rahul");
newSet.add("vaibhav");
newSet.add("rohan");
console.log(newSet); // -->{"rohan","rahul","vaibhav"}

newSet.delete("rahul");
console.log(newSet);// --> {"rohan","vaibhav"}
