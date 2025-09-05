// Initializing Props 

/*
    If a property(key) doesn't exist when we try to access it with the .
    operator , we'll just get undefined. One way to check for this is 
    by using the ! (not) operator because undefined is "falsy" (meaning it
    evaluates to false in a bollean context). The syntax is simple:
*/

const balances={
    lane:100,
    breanna:150,
    john:200
};

// if bob doesn't have a balance yet 
// create a new prop for him
// set to 0

if(!balances.bob){
    balances.bob=0
}