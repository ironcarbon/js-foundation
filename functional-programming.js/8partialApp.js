// Partial Application
// A way to partially apply a function. It is a process of producing a function with a smaller number of parameters.

// Taking a function applying some of its arguments into the function so it remembers those parameters and then it uses closures to later on be called with all the rest of the arguments.

//Currying example also uses partial application.

const multiply = (a, b, c) => a * b * c;
const curriedMultiply = (a) => (b) => (c) => a * b * c;
curriedMultiply(3)(4)(10);   //curried version

// In partial application, call the function ONCE and then apply the rest of the arguments to it. So that means, on the second call I expect all the arguments.

const multiply = (a, b, c) => a * b * c;
const partialMultiplyBy5 = multiply.bind(null, 5);
partialMultiplyBy5(4, 10);

// Partial application is on the second call expects ALL the ARGUMENTS. Currying expects ONE ARGUMENT at a time.