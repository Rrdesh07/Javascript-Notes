//Return Objects 

//As we talked earlier , in javascript, you can only return a single value from a function.
// so when you want to return multiple values , you just return an object that contian those values.

function doAllTheMath(x,y){
    const sum=x+y;
    const difference=x-y;
    const product=x*y;
    const quotient=x/y;

    return {
        sum,
        difference,
        product,
        quotient
    }
}

const results=doAllTheMath(10,5);
console.log(results.sum);
console.log(results.difference);
