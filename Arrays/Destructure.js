// Destructure

// You can destructure an array just like you can an object

const nums=[1,2,3];

function double([a,b,c]){
    return [a*2,b*2,c*2];
}

const [x,y,z] =double(nums);
console.log(x,y,z); //2,4,6

// If you're only interested in the first element, you can destructure
// just that element, from the same code :

const[x]=double(nums);
console.log(x); //2;

// If you're unsure how many elements there are, you can use the rest operator ...
// to capture the rest of the elements into a new array:

const[x,...resOfTheElements]=double(nums);
console.log(x);;
//2
console.log(resOfTheElements);
//[4,6]

// If you over-destructure, you'll get undefined.
const [x,y,z,a]=double(nums);
console.log(x,y,z,typeof a);
// 2 4 6 undefined