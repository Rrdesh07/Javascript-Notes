// Finally

/*
*   We missed a block. While a try/catch is the most common block you'll see there is also a finally
*   block
*
*   The code in the finally block will always be executed before the control flow exits the entire
*   construct.
*
*   It's for if you want something to run regardless of what
*   nonsense happens in the try and catch blocks. In some
*   crazy scenarios (try to avoid this), you might have an error
*   thrown in the catch block. But even if that happens , the
*   finally block will still run. In this example :
* */

try{
    const titan={}
    console.log(titan.neck.thickness);
    console.log("what's a titan?");
} catch(err){
    console.log(err.message);
}finally{
    console.log("This will always run regardless of any exception come");
}