// SCOPE 

// Scope in javascript defines where variables and functions are accessible in your code.
// and it can behave differently depending on the enviornment (such as a browser or Node.js).
// There are four levels , from highest to lowest:
// 1. Global Scope
// 2. Module Scope 
// 3. Function Scope
// 4. Block Scope

//1. Global Scope
// Variables declared globally have the highest level of scope and can be 
// accessed from anywhere in the code.

// In browser, global variables are properties of the window object .
// For example , window.myGlobalVar ='hello world' defines a global variable.

// In node.js , global variables are properties of the global object.
global.myGlobalVar = 'hello world'; // Global variable in Node.js

//2. Module Scope

// In Es Modules (both in Node.js and modern browsers), variables declared
// at the top level of a module are scoped to that module. They are not
// added to the global scope.

// In the browser, using <script type= "module"> 
// creates a module scope for that script.

//3. Function Scope
// Variables declared with var (we try to avoid this) are limited to the function scope.
// They are accessible only within that function and any nested functions.

// 4. Block Scope 
// Es6 introduced block scope with the let and const keywords.A block is typically defined
// by curly braces {} , like in if statements , loops , and other blocks of code.

// Variables declared with let and const are confined to their block 
// making them more predicatble and reducing the chances of accidental variable hoisting.