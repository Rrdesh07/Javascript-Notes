//Nullish coleascing 

//  The nullish coalescing operator (??) is way to handle these in a more 
// concise way.

let myName =null;
console.log(myName ?? "Guest User"); // it will print Guest User because myName is null

myName='nonNullValue'; 
console.log(myName ?? "Guest User"); // it will print nonNullValue because myName is not null or undefined

/*
    If the value on the left of ?? is null or undefined ,
    the value on the right is returned. Otherwise , the value 
    on the left is returned. It's way to set sane defaults for  
    variables that might be empty.
*/