// Function Hoisting 
// Function declarations are hoisted, meaning they can be called before they are defined in the code
hoistedGreet("Charlie"); // Calling the function before its declaration

function hoistedGreet(name) {
    console.log("Hi, " + name + "!");
}
hoistedGreet("Dave"); // Calling the function after its declaration

//This works because JS "hoists" the function declaration 
// to the top of the file before the code is executed. 
