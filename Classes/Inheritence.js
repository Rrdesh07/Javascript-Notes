// Inheritance

/*
*   A class can inherit methods and properties from a parent class using the
*   extends keyword:
* */

class Titan{
    constructor(name) {
        this.name = name;
    }
}

class BeastTitan extends Titan{
    speak(msg){
        console.log(`${this.name} says,${msg}`);
    }
}

const beast = new BeastTitan("zeke");
beast.speak("hello world!");

// And if we want to override a method from the parent class, we can do that too:

class Titan{
    constructor(name) {
        this.name = name;
    }
    speak(msg){
        console.log(msg);
    }
}

class BeastTitan extends Titan{
    speak(msg){
        console.log(`${this.name} says,${msg}`);
    }
}

const titan=new Titan("GOAT");
console.log("GOAT says i'm father of all the beasts");

const beast = new BeastTitan("zeke");
beast.speak("hello world!");
