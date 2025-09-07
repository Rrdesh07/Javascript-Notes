//Promises

/*
*   A promise in javascript is very similar to a promise to your friend. It's
*   just a commitment for the future.For example, I promise to explain promises
*   to you. This promise to you has 2 potential outcomes:
*
*   1. It's fulfilled, meaning I eventually explained
*   2. It's rejected, meaning I failed to explain
*
*   The promise object represents the eventual fulfillment or rejection of a promise.
*   In the meantime, while we're waiting for the promise to be fulfilled, our code
*   continues executing. Promises are the most popular modern way to write asynchronous
*   code in javascript.
*
*   Creating a Promise :
*
*   Here's  a promise that, based on random number generation will resolve and return the string resolved
*   or reject and return the string rejected after 1 second.
*
* */

const promise= new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(getRandomBool()) {
            resolve("resolved!");
        }else{
            reject("rejected!");
        }
    },1000);
});

function getRandomBool(){
    return Math.random()<0.5;
}

/*
*   Working with Promises :
*
*   Now that we've created promise, how do we use it?
*   The promise object has .then and .catch methods . Think of .then as
*   expected follow-up to a promise and .catch as the "something went wrong"
*   follow-up
*
*   1.If a promise resolves, its .then function will execute.
*   2.If the promise rejects its .catch method will execute.
*
* */

promise
    .then((message)=>{
        console.log(`The promise is finally ${message}`);
    })
    .catch((err)=>{
        console.log(`The promise is finally ${err}`);
    });