// Higher Order Functions and Closures

//HOF: It is a function that does one of two things. It either takes one or more functions as arguments or returns a function as a result often called a CALLBACK.

//1
const hof = () => () => 5
hof()()  // Function returns a function

// //2 Another function could be a function that returns or receives as a parameter a function.
const hof1 = (fn) => fn(5)
hof1(function a(x) { return x })


const ali = function () {
    return function () {
        return 5;
    }
}
ali(function (x) { return x })()  //5



const ali1 = (fn) => fn(5)
ali1(function a(x) { return x })  //5





// Closures
// Closures in JS are a mechanism for containing some sort of state and in JS we create a closure whenever a function accesses a variable defined outside of the immidiate function scope that is the scope of the parent. 

// Simply define a function inside another function and expose the inner function either by returning it or passing it to another function so that we can use that variable.

const closure = function () {
    let count = 0;
    return function increment() {
        count++;
        return count;
    }
}
const incrementFunc = closure();
incrementFunc()

// 1. Modifying the state outside of the function.(incrementFunc is tounching state or data that belongs to another function)

// Closure only make a function impure if we modified the closed over variable.

const closure1 = function () {
    let count = 100;
    return function get() {
        return count;
    }
}
const getCounter = closure1();
getCounter();

// In this example, we use closures here and not modifying the state. Still have access to data outside of ourselves. As long as we don't modify it and mutate the data we are still following the functional programming paradigm.

// In FP, we are able to use closures to create data privacy. As a user, I can't really modify the count.