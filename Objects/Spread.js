//Spread Syntax 

//Javascript has a really nifty spread syntax for moving groups of object
// properties around.It's a great way to copy objects and merge object properties.

const engineering_dept={
    lane:"grand magus",
    hunter:"software engineer",
    allan:"software engineer",
    matt:"software engineer",
    dan:"software engineer"
}

const video_dept={
    stass:"Video producer",
    alex:"video producer"
}

const all_employees ={...engineering_dept,...video_dept};
// {
//     lane:"grand magus",
//     hunter:"software engineer",
//     allan:"software engineer",
//     matt:"software engineer",
//     dan:"software engineer",
//     stass:"Video producer",
//     alex:"video producer"
// }


// The spread syntax shallow-copies the properties of the objects you're spreading.
// If properties have the same name,the last (right-most) object's property will 
// overwrite the previous ones.

const engineering_department={
    lane:"grand magus",
    hunter:"software engineer"
}

const video_department={
    lane:"video editor",
    alex:"video producer"
}

const all_employees_data={...engineering_department,...video_department};

// {
//     lane:"grand magus",
//     hunter:"software engineer",
//     lane:"video editor",
//     alex:"video producer"
// }
