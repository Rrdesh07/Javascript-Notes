//Private Properties 

/*
    By default, all properties of a class are public, meaning they can be accessed 
    and modified from outside the class.Here's an example:
*/

class Movie{
    constructor(title,rating){
        this.title=title;
        this.rating=rating;
    }
};

const matrixMovie=new Movie("The Matrix",9.5);
console.log(matrixMovie.title);

matrixMovie.title="The Matrix Reloaded";
console.log(matrixMovie.title);

/*
    Maybe we don't want our title to be able to be changed anywhere in our code .
    We can make it private by prefixing it with a hash '#' and declaring it at the 
    top of the class.
*/

class Movie{
    #title;
    constructor(title,rating){
        this.#title=title;
        this.rating=rating;
    }
};

const golmalMovie=new Movie("Golmal returns",7.99);
console.log(golmalMovie.title); // It will throw error because private fields can't access directly outside
                                // of the class.

//Private properties can still be used from within the class:

class Movie{
    #title;
    constructor(title,rating){
        this.#title=title;
        this.rating=rating;
    }

    getTitleAllCaps(){
        const allCapsTitle=this.#title.toUpperCase();
        return allCapsTitle;
    }
};

const dhamalMovie=new Movie("Dhamal",8.5);
console.log(dhamalMovie.getTitleAllCaps);