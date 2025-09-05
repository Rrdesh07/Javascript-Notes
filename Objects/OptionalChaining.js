//Optional chaining

/*
    Nested data can quickly become hard to work with.
    In most production systems, you'll deal with 3-4 levels of 
    objects nesting on a regular basis.

    when using the normal .operator , if the object on the left side 
    of the . is null or undefined, you'll get a TypeError at runtime!
    Thankfully, Javascript has recently added a new operator to make 
    dealing with this headache easier, the Optional chaining operator:
    ?.
*/

const tournament={
    prize:{
        units:"dollars",
        value:"100"
    }
}

// console.log(tournament.refree.name); // This will throw a TypeError because refree is undefined

console.log(tournament.refree?.name); // This will return undefined instead of throwing an error
console.log(tournament.prize?.value); // This will return 100 as expected
console.log(tournament.prize?.units); // This will return "dollars" as expected

//when to chain 

/*
    You should only use ?. chains when you expect an object may not exist.
    For example, if according to our business logic, a user must have an address object,
    but the address object may not have a street property, we wouldn't use the 
    optional chaining operator because we expect user.address to never be undefined.

    const street = user.address.street;

    but if not all users have an address , we might use the optional chainging operator:

    const street=user.address?.street;

    or , if we aren't even sure if the user object exists:
    const street = user?.address?.street;

    we don't want to overuse it because if we expect that all users have objects ,
    and we come accross one that doesn't we probably want an error thrown
    so we can see it and go fix the problem.Good errors make debugging easier.
*/