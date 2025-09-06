// Maps

/*
*   Javascript also offers (as of recently) support for maps
*   Collection of a key-value pairs. Map keys are unique,
*   so adding a key that already exists will replace its value.
*   You can set and delete entries dynamically
* */

const sampleMap=new Map();
sampleMap.set(1,"rahul");
sampleMap.set(2,"rakesh");
sampleMap.set(3,"rohan");

console.log(sampleMap);

sampleMap.delete(2);
console.log(sampleMap);

// Maps can be constructed from any iterable.
// Maps are iterable, so that means the Map constructor can accept a map:

const mapCopy=new Map(sampleMap);
console.log(mapCopy);
