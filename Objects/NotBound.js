//Not Bound

/*
    Methods in javascript are not bound to their object by default(as they are in language like python
    and Go ) . So if you use a method as a "callback" function, you may run into issue with this keyword.

*/

const user={
    name:"Lane",
    sayHi(){
        console.log(`hi , my name is ${this.name}`);
    }
}

user.sayHi();
// hi, my name is Lane 

const sayHi=user.sayHi;
sayHi();
//TypeError : cannot read properties of undefined

// This happens a lot when passing a method as a callback function to another function.

// If you want to use a method as a callback function , you'll need to bind it to the object
//using the bind method.

const boundSayHi=user.sayHi.bind(user);
boundSayHi();