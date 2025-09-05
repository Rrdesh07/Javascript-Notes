//Objects

/* 
    Javascript objects are in almost weirdly versatile collection type.
    Object literals(POJOs, or plain old javascript objects) are often used 
    to store data in key-value pairs.
*/

const apple={
    name:"Apple",
    color:"Red",
    radius:2
}

// You can access properties stored on an object using the . operator
console.log(apple.name);
console.log(apple.color);
console.log(apple.radius);

/* 
    Javascript objects are interesting because you'll use them the way you'd 
    probably use a map or a dictionary in other languages( simple key-value pairs).
    but they can also be used for more complex things like classes and prototypes...
    which we'll cover later.
*/