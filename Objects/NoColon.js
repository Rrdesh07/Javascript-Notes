//No Colon

/*
    The key:value syntax is the normal way to create key-value pairs in objects.
    but if you want a key to have the same name as an existing variable, you can
    omit the colon and the value.These are the same:
*/

const radius=2;
const color="Red";

const apple={
    radius:radius,
    color:color
}

const apple2={
    radius, // same as radius:radius
    color  // same as color:color
}

// when the key and value have the same name, you can omit the colon and value
console.log(apple);
console.log(apple2);