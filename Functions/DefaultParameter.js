// Default Parameters 

// In javascript, you can specify default values for function parameters 
// This is particularly useful for optional parameters where you want to ensure 
// a specific default behavior if the caller does not provide certain arguments.
// Default parameters values can be set during the function declaration.

function greet(name = "Guest", greeting = "Hello") {
    console.log(greeting + ", " + name + "!");
}
greet(); // Uses both default values: "Hello, Guest!"
greet("Alice"); // Uses default greeting: "Hello, Alice!"
greet("Bob", "Hi"); // Uses both provided values: "Hi, Bob!"



