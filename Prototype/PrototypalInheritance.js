//Prototypal Inheritance

/*
*    So I tricked you a bit . Classes are actually a fairly new addition
*    to javascript. See they're not the underlying mechanism for inheritance
*    that's actually prototypes.
*    Classes are just syntactic sugar for prototypes.
*
*   Every Object in javascript has a prototype. when an object "inherits" from
*   another object, it's really that its parent is marked as it's "prototype".
*   It's called prototypal inheritance. The built-in Object.create() method
*   creates a new object with its prototype set to the given object.
* */

const pureTitan={
    name: "Eren's mom",
    speak(msg){
        console.log("*titan noises");
    }
};
pureTitan.speak();

const beastTitan=Object.create(pureTitan);

console.log(beastTitan.name);
beastTitan.speak();

beastTitan.name="zeke";
beastTitan.speak=function(){
    console.log(`${this.name} says, I'm the Beast Titan`);
}

console.log(beastTitan.name);
beastTitan.speak();


