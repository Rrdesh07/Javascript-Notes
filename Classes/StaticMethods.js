// Static Methods

//A static method or property is kind of like a class method
// in python , that is , it's bound to the class itself,
// not the instance of the class (an object). In this
//example we create two instances of the User class:


class User{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

const lane = new User("lane",30);
const allan= new User("allan",30);
console.log(lane.name); // lane
console.log(allan.name); //allan

/*
*   In JavaScript, a class is just an object template , so
*   when we create a static method or property the object instance
*   can't access it. So static members are often used for utility
*   functions for the class itself.
* */

class User{
    static numUsers=0;

    constructor(name,age) {
        this.name = name;
        this.age = age;
        User.numUsers+=1;
    }

    static getNumberOfUsers(){
        return User.numUsers;
    }
}

const satish= new User("satish",40);
console.log(User.getNumberOfUsers()); // 1
const vaibhav = new User("Vaibhav",35);
console.log(User.getNumberOfUsers()); //2

