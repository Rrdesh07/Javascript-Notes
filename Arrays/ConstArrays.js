// Const Arrays

/*
*   Like objects, the contents of const arrays can be modified! Again,
*   they just can't be reassigned. That means we can add and remove
*   elements, but we can't set a new array value with the assignment
*   operator =
* */

const drinks=[]

drinks.push("lemonade");
//["lemonade"]

drinks=["root beans"];
//TypeError : Assignment to constant variable.

/*
*   Personally,I'm not a fan of this quirk of the javascript language because,
*   to me,const implies that a value won't change at all. However, in the case
*   of an array all the contents can be modified as long as the assignment operator
*   is never used to reassign the array itself.
* */