//Classes 

/*
    Classes in Js are a template for creating objects,As we learned ,
    unlike many other languages, it's easy to create Javascript objects
    without classes, but that doesn't mean classes aren't useful.
*/

class User{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

const user = new User("Lane",100);

//The class declaration creates a new class
// The constructor method is a special method that called when a new instance of the class 
//(object) is created.
//The nwe keyword calls the constructor method and crates a new instance of the class.