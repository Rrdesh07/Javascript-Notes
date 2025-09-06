// Getters and Setters

/*
*  In Javascript classes, getters and setters let us define special methods for getting
*   and setting the values of properties.They look like regular methods but are accessed
*   like properties. Here's an example using the get keyword.
* */

class User{
    constructor(name,age){
        this._name=name;
        this._age=age;
    }
    get name(){
        return this._name;
    }
    set name(name){
        if(!name.length){
            throw new Error("Name cannot be empty , Please Enter a valid Name");
        }
        this._name = name;
    }
    get age(){
        return this._age;
    }
    set age(age){
        if(age<0){
            throw new Error("Age cannot be Negative , Please Enter a valid Age");
        }
        this._age;
    }
}

const ram = new User("ram",25);
console.log(ram.name);
console.log(ram.age);

/*
*   Notice that we've renamed this.name to this._name in our constructor
*   to avoid a name collision with the greater itself.
*
*   A setter lets us control what happens when a property is changed.
*   For example, we could validate a user's age to make sure it's not negative: 
* */
