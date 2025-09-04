// There are three ways to declare a variable in Js 
/*
1.var
2.let
3.const
*/
// var is function scoped means it's basically global level variable
// let is basically block scoped means it is limited to the block in which it is defined
//  const is also block scoped but once its value is assigned it cannot be changed

// NOTE : Don't use var , avoid it as much as possible and use Let and const 

var age = 25;
let flag=true;
if(true){
    var age='hello';
    console.log("value of age inside block is: ",age);
}

console.log("value of age outside block is: ",age); // this will also print hello because we used var

// correct way to do it using let
let score=100;
if(true){
    let score=50;
    console.log("value of score inside block is: ",score);
}
console.log("value of score outside block is: ",score); // this will print 100 because we used let

const pi=3.14;
// pi=3.145; // this will give error because we cannot change the value of const variable
console.log("value of pi is: ",pi);