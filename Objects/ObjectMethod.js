//Object Methods

/*
    Javascript objects can have methods, just like classes in python or structs in GO
    Objects are intresting in javascript because they play the role of dictionaries and
    classes in other languages(yes,Js also has classes,but we'll get to them later).

    Methods are functions that are defined on object.
    They can access and change the properties of the object in question.
    In the context of an object method , the this keyword referes to the 
    object itself, like self in python( we'll talk about the admittedly hairy this keyword 
    in more detail later)
 */

const person={
    firstName:"Rohan",
    lastName:"Deshmukh",
    getFullName(){
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.getFullName());
