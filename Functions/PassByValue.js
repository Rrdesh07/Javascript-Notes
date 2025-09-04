//Passing By Value 

// Variables in Javascirpt are typically passed by value 
// (except for objects and arrays, which we'll talk about later and are passed by reference).
// "Pass by value" means that when a variable is passed into a function,
// that function receives a copy of the variable. 
// The function is unable to mutate the caller's original data.

let x=5;
increment(x);
console.log(x);
// 5

function increment(n){
    x++;
    console.log(n);
    //6
}
