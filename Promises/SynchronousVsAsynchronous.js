// Synchronous vs Asynchronous

/*
*   Most code is synchronous code, which means it runs in sequence. Each line of code
*   executions in order, one after the next
*
*   Example of synchronous code:
*
*   console.log("I print first");
*   console.log("I print second");
*   console.log("I print third);
*
*   Asynchronous or async code runs concurrently. While the main thread continues
*   running subsequent code,async tasks are handled outside the main execution flow and
*   run as system resource allow. A good example is with the built-in setTimeout() function.
*
*   setTimeout accepts a function and a number of milliseconds as inputs.It sets aside
*   the function to be run after the number of milliseconds has passed,at which point it
*   gets queued for execution when the main thread is available.
*
*   console.log("I print first");
*   setTimeout(()=>{
*       console.log("I print third ,because i'm waiting till 3 seconds are past);
*   },3000);
*   console.log("I print second);
*
*  */

console.log("I print first");
setTimeout(()=>{
       console.log("I print third ,because i'm waiting till 3 seconds are past)");
},3000);
console.log("I print second");