//Nesting Objects

/*
    Objects can contain other objects.Here we've nested two
    object literals within the tournament object.
*/

const tournament={
    refree:{
        name:"Alex",
        age:25
    },
    prize:{
        units:"dollars",
        value:100
    }
}

// we can access nested properties the same way by chaining . tournament.refree.name 

console.log(tournament.refree.name);
console.log(tournament.prize.value);