// Function as values 

//  In javascript we can store the value of function in variables
// so that's why i called as function as values

function multiply(x, y) {
    return x * y; // Returns the product of x and y
}   
let product = multiply; // Storing the function in a variable
console.log("Product:", product(4, 5)); // Calling the function using the variable

// We can also pass functions as arguments to other functions
function operate(a, b, operation) {
    return operation(a, b); // Calls the passed function with a and b
}   

let sumResult = operate(10, 20, function(x, y) {
    return x + y; // Anonymous function to add x and y
});
console.log("Sum Result:", sumResult); // Output: Sum Result: 30