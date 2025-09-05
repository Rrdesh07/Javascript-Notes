//Methods Mutate

// Methods can change the properties of their objects as well :

const tree={
    height:256,
    color:"green",
    cut(){
        this.height/=2;
    }
};

tree.cut();
console.log("Current height:",tree.height);

tree.cut();
console.log("Current height:",tree.height);

// You might be wondering:

/*
    wait... I thought tree was a constant?!?

    You're right, but in Javascript, the const keyword doesn't stop you from chainging
    the properties of an object... it only stops you from reassigning the variable 
    (tree in this case) to a new object.
    Do not trust const objects to have constant contents! 
*/