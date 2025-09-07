// Await

/*
*   The Await keyword is used to wait for a promise to resolve.Once it has been
*   resolved, the await expression returns the value of the resolved promise.
*   It's basically a more modern syntax for .then callbacks.
*
*   .then callback
*   promise. then((message))=>{
*       console.log(`Resolved with ${message}`);
*   });
*
*   await syntax
*   const message = await promise;
*   console.log(`Resolved with ${message}`);
*
*   Personally i recommend using await over .then whenever possible. It's
*   cleaner and easier to read.
*
*   Handling the rejections
*
*   when using await, if the promise is rejected, it will throw an error. That means
*   we can use standard try/catch blocks to handle rejections.
*
*   try{
*       const message=await promise;
*       console.log(`Resolved with ${message}`);
*   }
*   catch(error)=>{
*       console.log(`Rejected with ${error}`);
*   }
* 
* */