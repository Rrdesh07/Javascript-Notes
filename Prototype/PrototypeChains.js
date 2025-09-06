//Prototype Chains

/*
*   Every Object has a prototype, and that prototype can in turn have a prototype,
*   creating a chain that goes all the way back to the root Object object, whose
*   prototype is always null.
*
*   An Object stores a reference to its prototype. The Object.getPrototypeOf()
*   method returns the prototype of an object. When we create a new POJO (plain
*   old Javascript Object), its prototype is automatically set to Object.prototype
* */

const pureTitan={
    name:"Eren's mom"
};

const beastTitan =Object.create(pureTitan);
beastTitan.name="zeke";

console.log(beastTitan);
console.log(Object.getPrototypeOf(beastTitan)); //pureTitan
console.log(Object.getPrototypeOf(Object.getPrototypeOf(beastTitan))); // Object.prototype --> top of chaining which is object

console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(beastTitan)))); // null

// How are parent Members Accessed?

/*
 *  you might think that using Object.create() copies the properties from the parent object
 *  to the child object
 *
 *  But it does not. Javascript looks within the beastTitan object for the name property and
 *  doesn't find it because we never set one. So it checks it's prototype(using Object.getPrototypeOf(bestTitan))
 *  which is pureTitan, and finds the name property there. It uses that value instead.
 *
 */
