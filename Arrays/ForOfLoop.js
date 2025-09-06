// ForOfLoop in arrays

/*
 * Javascript has a relatively new for..of syntax to loop over a sequence without
 *  the need to keep track of the index manually.so instead of typing out all of this:
 */

let woods=["oak","pine","maple"];
for(let i=0;i<woods.length;i++){
    console.log(woods[i]);
}
//["oak","pine","maple"]

for(let wood of woods){
    console.log(wood);
}
//["oak","pine","maple"]

// For object it won't work i thought in loop gives keys, so in similar fashion this one might give us values
// But it won't , it will break so don't use it on OBJECTS.
// const person={
//     name:"John",
//     age:25,
//     sex:"male"
// }
// for(let property of person){
//     console.log(property);
// }


