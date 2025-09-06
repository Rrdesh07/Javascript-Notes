// Set Composition

/*
*   I'll be 10000% honest, I don't often use these fancy set composition methods...
*   but maybe I should. They're pretty neat. In most of my work I just use sets
*   to check for existence or de-duplicate values. But if you're versed in set
*   theory, you might find these methods useful.
* */

// Intersection

// The .intersection() method returns a new set containing the elements that are in both sets.

const heros= new Set(["rohan","rahul","rakesh","vaibhav"]);
const villians =new Set(["vaibhav","dharemendra","satish","rahul"]);
const samesies= heros.intersection(villians);
console.log(samesies);

// Difference

// The .difference() method returns a new set containing the elements that are in the first set but not
// in the second set.

const nonVillans=heros.difference(villians);
console.log(nonVillans);

// Union

// The .union() method returns a new set containing the elements that are in either set.

const everyone=heros.union(villians);
console.log(everyone);

// There are some more set methods, but those are the big three.