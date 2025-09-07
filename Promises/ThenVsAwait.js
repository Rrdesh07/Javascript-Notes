// then vs await


/*
*   In the early days of web browsers, promises and the await keyword didn't exist,
*   so the only way to do something asynchronously was to use callbacks.
*
*   A "callback functions" is a function that you hand to another function. That function
*   then calls your callback later on. The setTimeout function we've used in the past is
*   a good example.
*
*   function callbackFunction(){
*       console.log("calling back now!");
*   }
*   const milliseconds=1000;
*   setTimeOut(callbackFunction,milliseconds);
*
*   The .then() syntax is generally easier to use than non-promise callbacks,but async and await
*   make handling promises even simpler. As a general rule, prefer async and await over .then
*   and New Promise()... I mean for realsies , which of the following is easier to understand ?
*
* */

fetchRecipient()
    .then(recipient => {
        return fetchMessageRecipient(recipient.id);
    })
    .then(message => {
        return fetchDeliveryStatus(message.id);
    })
    .then(deliveryStatus => {
        console.log(`The status is ${deliveryStatus}`);
    });


// async-await syntax below

const recipient= await fetchRecipient();
const message= await fetchMessageRecipient(recipient.id);
const status = await fetchDeliveryStatus(message.id);
console.log(status);

// The async and await keywords weren't released until after the .then api,
// Which is why there is till a lot of legacy .then() code out there.