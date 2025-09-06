// Error Object

/*
*   Errors in javascript, like Go, are called Errors. It's sure beats
*   a silly name like "Exceptions"...
*
*   The most important property on the built-in error object is the message
*   property : which should be a human-readable description of the error.
* */

const err=new Error("We've run out of baked salmon");
console.log(err.message);
console.log(err.stack);