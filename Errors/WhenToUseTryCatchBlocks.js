// When to try/catch

/*
*   Errors are not something to be scared of. Every program that runs in production
*   handles errors on a constant basis. Our job as developers is to handle the errors
*   gracefully and in a way that aligns with our expectations. Now, I will admit, one
*   of the big criticisms I have of Javascript is how hard is to know whether I should
*   expect a function to potentially throw an error or not.
*
*   In Go and some other languages, the function signature tells us if we should expect
*   an error:
*
*   function getMovieRecord(movieId int)(Movie,error){
*       .....
*   }
*
*   This lets us know if we should be prepared to handle an error when we call a function
*   In javascript... we're kind left guessing. The only way to know for sure is to read
*   the body of the function. This might tempt you to just wrap everything in tons of
*   try/catch blocks, but I'd advise against that.
*
*   Here are some rules of thumb for knowing when to use try/catch :
*
*   1. Do you Control the input ?
*   ---> If the variable in question is coming from a user, an API or some other
*        external source, you should probably wrap its initial handling in a try/catch
*        block.
*
*   2. Is the error recoverable?
*   ---> If the error is something you can recover from, like a network request failing, you
*        should probably wrap it in a try/catch block. If not let the program crash.
*
*   3. Are you trying to compensate for bad code ?
*   --> If you wrote some bad code that results in more errors than there need to be
*       don't wrap it in a try/catch block.Fix the code.
*
*   4. Is it really an abort-worthy error ?
*   --> In a lot of (especially front-end) Javascript code, there are so many unknowns that it
*       doesn't make sense to lose control of a program just because a  variable is undefined.
*       That's why the optional chaining operator(?.) and nullish coalescing operator(??) were
*       introduced... use them as needed.
*
* */