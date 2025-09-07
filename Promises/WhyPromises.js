// why promises?

/*
*   Promises are the cleanest (but not the only) way to handle the common scenario where
*   we need to make requests to server, which is typically done via an HTTP Request.
*   Javascript's built-in fetch() function (that we'll cover in a later course) returns
*   a promise.
*
*   I/O, or "input/output"
*   Almost every time you use a promise it will be to handle same form of I/O.
*   I/O or input/output , when our code needs to interact with system of the
*   relatively simple world of local variables and functions.
*
*   Common examples of I/O include:
*   1.HTTP requests
*   2.Reading files from the hard drive
*   3.Interacting with a bluetooth device
*   4.Sending data to a database.
*
*   Promises help us perform I/O without forcing our entire program to freeze up
*   while we wait for a response.
*
* */