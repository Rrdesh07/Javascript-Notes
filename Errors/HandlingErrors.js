// Handling Errors

/*
*   Errors are thrown ( and should be thrown by you ) when
*   a non-happy path is encountered in your code. For example:
*
*   1. Data received from an API is not in the expected format.
*   2. The connection to a database is lost.
*   3. A user tries to log in with an incorrect password.
*
*   Like Python , when an error is thrown , Javascript yeets the program out of it's
*   current context and into the nearest try/catch block, or if there isn't one, it
*   crashes the program. For example:
* */

const titan={}
console.log(titan.neck.thickness);
console.log("done");

// 2nd line will throw the below error
// TypeError ; Cannot read properties of undefined

/*
*   It never gets to the console.log("done") because the error crashes the program.
*   But what if we use a try/catch block? We place the potentially error-throwing
*   code in the try block , and if an error is thrown,execution immediately jumps to
*   the catch block (ignoring any code in the try block that hasn't run yet)
* */

try{
    const titan={}
    console.log(titan.neck.thickness);
    console.log("what's a titan");
}catch(err){
    console.log(err);
}
console.log("done");

// cannot read properties of undefined (reading 'thickness')
// done