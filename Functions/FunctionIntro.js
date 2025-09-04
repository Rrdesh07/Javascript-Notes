// Function we use when we want to do some logic more than once in our code
// We can define a function once and call it multiple times
function greet(name) {
    console.log("Hello, " + name + "!");
}   
greet("Alice"); // Calling the function with argument "Alice"
greet("Bob");   // Calling the function with argument "Bob" 

// Function with return value
function add(a, b) {
    return a + b; // Returns the sum of a and b
}   
let sum = add(5, 3); // Calling the function and storing the return value
console.log("Sum:", sum); // Output: Sum: 8

