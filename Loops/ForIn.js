// For In

/*
*   Sometimes its useful to loop over all the keys of an object.
*   This is most useful when you're using an object
*    as you would use a dictionary or hash map in other languages.
* */

let titan={
    name:"Eren",
    power:"Attack Titan",
    age:19
};

for(const key in titan){
    console.log(`${key} : ${titan[key]}`);
}

const sampleArray=[1,2.3,4,5];
for (const key in sampleArray){
    console.log(`${key} : ${sampleArray[key]}`);
}
//name: Eren
//power: Attack Titan
//age :19

/*
*   In modern specifications, the traversal order is well-defined and
*   consistent across implementations:
*   within each component of the prototype chain, all non-negative integer
*   keys(those that can be array indices) will be traversed first in ascending
*   Order by value, then other string keys in ascending chronological order of
*   property creation.
*
*   That's still not obvious to me when i read code however, so if I really care
*   about order i usually break out the keys into an array and sort them how i want
*   we'll cover arrays later.
*
* */

