//String As Keys

/*
    Accessing a property like desk.height is great when the name of the prop
    is static, meaning you know what it is before runtime. But what if the key
    is dynamic? Like, what if the user enters a string and you need to use
    that as the lookup key?
*/

const desk={
    wood:"maple",
    width:100
}

console.log(desk.wood);
// prints "maple"

console.log(desk["wood"]); // prints "maple"

const key="wood";
console.log(desk[key]); // prints "maple" 