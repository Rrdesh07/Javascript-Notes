//Updating the objects

/*
    You can update and add new keys (you'll see me use the
    words "property" and "key" interchangeably in this course)
    to an existing object using the . operator
*/

const apple={
    name:"Apple",
    radius:2,
    color:"Red"
}

apple.numSeeds=3; //add new key
apple.color="Green"; // update existing key

console.log(apple);