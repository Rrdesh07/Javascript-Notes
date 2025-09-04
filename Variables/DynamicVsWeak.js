// Dynamicly typed language means a language in which variable type 
// is determined at runtime means we don't need to specify the type of variable
// Js is a dynamicly typed language

let variable1=10; // here variable1 is of type number
console.log("value of variable1 is: ",variable1);
console.log("type of variable1 is: ",typeof variable1);

variable1="Hello"; // now variable1 is of type string
console.log("value of variable1 is: ",variable1);
console.log("type of variable1 is: ",typeof variable1); 

// In above example we saw that we didnt specify the type of variable1
// but still it worked and type of variable1 changed at runtime

// Weakly typed language means a language in which variable type can be changed
// at runtime means we can change the type of variable at runtime
// Js is a weakly typed language

let variable2=20; // here variable2 is of type number
console.log("value of variable2 is: ",variable2);
console.log("type of variable2 is: ",typeof variable2);

variable2=true; // now variable2 is of type boolean
console.log("value of variable2 is: ",variable2);
console.log("type of variable2 is: ",typeof variable2);

variable2=30.5; // now variable2 is of type number again
console.log("value of variable2 is: ",variable2);
console.log("type of variable2 is: ",typeof variable2);
// In above example we saw that we changed the type of variable2 at runtime
// from number to boolean and then again to number
// this is possible because Js is a weakly typed languages
// if Js was a strongly typed language then we would not be able to change the type of variable2 at runtime
// in strongly typed language once a variable is assigned a type it cannot be changed
// examples of strongly typed languages are Java, C++, etc.

// NOTE : Dynamicly typed language and weakly typed language are not same
// Dynamicly typed language means we don't need to specify the type of variable
// Weakly typed language means we can change the type of variable at runtime
// Js is both dynamicly typed and weakly typed language