//Anonymous Functions 

// Anonymous functions are true to form in that they have no name.
// They're useful when defining a function that will only be used once or
// to create a quick closure.

// let's say we have function conversions that accepts 
// another function , converter as an input.

function conversions(x,y,z, converter){
    return [converter(x), converter(y), converter(z)];
}   

// we could define a function normally and then pass it in by name... but 
// if we only want to use it in this one place, we can define it inline as 
// an anonymous function

// using a named function 
function double(n){
    return n*2;
}

console.log(conversions(1,2,3,double)); // [2,4,6]

// using an anonymous function
console.log(conversions(1,2,3,function(n){
    return n*2;
})); // [2,4,6]

// The anonymous function is defined right where it's needed, 
// making the code more concise and easier to read in this case.