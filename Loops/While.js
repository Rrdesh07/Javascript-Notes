//While

// Like many other languages , Js has a while loop.
// It keeps running as long as the condition is true.

const jane={
    name:"jane",
    mom:{
        name:"Alice",
        mom:{
            name:"Lilly",
            mom:{
                name:"Granny"
            }
        }
    }
}

currentPerson=jane;
while (currentPerson){
    console.log(currentPerson.name);
    currentPerson=currentPerson.mom;
}
console.log("No more ancestors!");