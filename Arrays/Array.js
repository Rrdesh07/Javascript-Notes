//Arrays

/*
*   Javascript's arrays are similar to the Python's lists
*
*   One important thing about the javascript arrays are that items in
*   array are not required to be of same type... Remember, Js is
*   about as loosy-goosy as programming language get....
*
* */

const numbers=[1,2,3,45];
const strings=["rohan","rahul","rakesh"];
const miscellaneous=["rohan",1,2,23.5,true,"hello world"];

// You can index into an array using the square brackets.

console.log(strings[0]); // rohan

// And you can .push() new items onto the end of an array :

strings.push("vaibhav");

console.log(strings); //[ 'rohan', 'rahul', 'rakesh', 'vaibhav' ]

