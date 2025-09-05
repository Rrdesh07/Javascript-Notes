//Destructuring 

// It's admittedly annoying to have to get the return values from an object by using
// the . operator. The destructuring assignment lets us unpack object properties easily.

// so instead of this :

const apple={
    radius:2,
    color:red
};

// const radius=apple.radius;
// const color=apple.color;

// we can do this :

const apple1={
    radius:2,
    color:red
};

// const {radius,color}=apple1;

// I use it all the time to unpack function return values:

function getApple(){
    const apple={
        radius:2,
        color:"red"
    }
    return apple;
}

const {radius,color}=getApple();
console.log(radius);
console.log(color);
