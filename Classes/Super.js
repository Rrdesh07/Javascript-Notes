// Super

/*
*   The super keyword allows us to call methods on an object's
*   parent . It's often used to call a parent's constructor
*   method when the child object has its own.
* */

class Titan{
    constructor(name){
        this.name=name;
    }
    toString(){
        return `Titan - Name: ${this.name}`;
    }
}

class BeastTitan extends Titan{
    constructor(name,power) {
        // call the parent's constructor
        super(name);
        this.power=power;
    }

    toString(){
        // call the parent's `toString` method
        return `${super.toString()}, power:${this.power}`;
    }
}

const beast = new BeastTitan("zeke",9000);
console.log(beast.toString());