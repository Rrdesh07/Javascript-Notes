// This 

/*
    The this keyword is perhaps one of the most rage-inducing parts of 
    javascript. once you understand it, it's not too bad, but it's far 
    from intuitive

    Put simply, this refers to the context where a piece of code is executed...
    let's cover some of those cases : 

    Global Context: 
        This refers to the WINDOW object in the browsers or module.exports in Node.js
        (not global , as you might expect).

        // in browser 
            console.log(this); ---> window{...}
        
        // in Node.js
            console.log(this); -----> {}

        Strict Mode: 

            In Strict Mode( which we'll cover later , don't worry about it too much for now)
            this is undefined in the global scope in both the browser and node.js

           ex :  
            "use strict"
            console.log(this) ----> undefined

        Method of Context: 

            Inside a standard method or a constructor, 
            this refers to the object the method is called on .

            const myObject={
                message :"Hello,World!",
                myMethod(){
                    console.log(this);
                    console.log(this.message);
                }
            };

            myObject.myMethod();
            //{"message":"Hello,World!"}
            // Hello,World!
        
        Arrow Functions :
            
            We'll cover arrow functions specifically in the next lesson-they're bit of a special case.
*/