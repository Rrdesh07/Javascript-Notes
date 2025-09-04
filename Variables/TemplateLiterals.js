// Template Literals 

/*
    In Js , template literals are a fantastic way to interpolate dynamic values into a string.
    They're Js's version of Python's f-strings or C#'s string interpolation.

    const name = "Alice";
    const age = 30;
    const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
    console.log(greeting); // Output: Hello, my name is Alice and I am 30 years old.

    Template Literals must start and end with a backtick , and anything inside of the 
    dollar-sign bracket enclosure is automatically cast to a string.
*/

const shadeOfRed=101;

console.log(`The shade of red is: ${shadeOfRed}`); // Output: The shade of red is: 101
console.log(`The shade of red plus 10 is: ${shadeOfRed + 10}`); // Output: The shade of red plus 10 is: 111