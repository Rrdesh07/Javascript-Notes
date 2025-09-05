// Fat Arrows and This 

/*
    One reason to choose an arrow function over a regular function or method 
    is to preserve this context. It's particularly useful when working with 
    objects.To be fair, in a simple object like this ,the non-arrow method makes
    perfect sense.
*/

const author={
    firstName:"Lane",
    lastName:"Wanger",
    getName(){
        return `${this.firstName} ${this.lastName}`;
    }
};


console.log(author.getName());

/*
    with a fat-arrow function, the this keyword refers to the same context as its parent.
    In essence, fat arrow functions "preserve" the this context. this why this this.firstName 
    and this.lastName are undefined in this example:
*/

const author1={
    firstName:"Lane",
    lastName:"Wanger",
    getName:()=>{
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(author.getName());

//prints:undefined undefined 
//because `this` still refers to the global object 
// and 'firstName' and 'lastName' are not defined globally
