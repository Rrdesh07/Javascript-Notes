// Why Async?

/*
*   We try to mostly write synchronous code whenever possible because it's easier to keep
*   track of , and therefore leads to fewer bugs. But sometimes we need our code to asynchronous.
*   For example, whenever you update your user settings on website, your browser needs to communicate
*   those new settings to the server.The time it takes your HTTP request to the server. The time it
*   takes your HTTP request to physically travel across all the wiring of the internet can be anywhere
*   from 10-1000 milliseconds(give or take).
*
*   It would be excruciating if your webpage froze while waiting for every network request to finish
*   By making network requests asynchronously, the webpage can continue to execute other code while
*   waiting for the HTTP response to come back.
* 
* */