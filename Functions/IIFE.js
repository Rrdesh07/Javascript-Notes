// Immediate Invocation 

// You can immediately invoke a function after defining it using the not at all hard to pronouce 
// acronym "IIFE" (Immediately Invoked Function Expression).

(function(name){
    console.log("Hello, " + name + "!");
})("Eve"); // Immediately invoking the function with argument "Eve"

// This pattern is often used to create a new scope, 
// which can help avoid polluting the global namespace and 
// can also be useful for creating closures.

// The function is defined and then immediately called. It looks nasty,
// but its occasionally useful for a couple of reasons.

// Scope: It has it's own scope
// Expression : Can be convenient for computing a value as a single expression
// Async : Can be used to quickly run code in an async function (we'll cover this later)

