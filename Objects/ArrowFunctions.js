// Arrow Functions 

// Arrow functions are another way to define functions in javascript.
// Arrow functions are newer than the function keyword, however , unlike 
// the let/const syntax , arrow functions are sometimes better , not always better

// declaring a function without a variable
function add(x,y){
    return x+y;
}

//declaring a function with a variable.
const add = function(x,y){
    return x+y;
}

//declaring a function with a variable.
const add=(x,y)=>{
    return x+y;
}

//what's the difference?
/*
    --> Fat arrow functions are always declared as variables
    -usually const's while the function keyword may or may not 
    be declared as a variable.
    --> Fat arrow functions handle object scoping in a more intuitive way
    (we'll talk about this later)
    ---> Fat arrow functions don't work as constructors 
    (we'll talk about this later)
     

*/