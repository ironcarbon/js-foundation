// Compose
// Composing or composition is the idea that any sort of data transformation that we do should be obvious.

// In a factory, we have data that gets processed by a function that outputs some sort of data. That data gets processed by another function that outputs that data in a new form and so on and so forth.

// data --> fn --> data --> fn -->

// Composability is a system design principle that deals with relationship of components.

const compose = (f, g) => (data) => f(g(data))
const multiplyBy5 = (num) => num * 5;
const makePositive = (num) => Math.abs(num);
const multiplyBy5AndAbsolute = compose(multiplyBy5, makePositive)

multiplyBy5AndAbsolute(-50);

//Pipe
// Pipe is same thing with Compose except instead of going from right to left, it goes left to right.

const pipe = (f, g) => (data) => g(f(data))

//f gets run first over the data and then g gets run over that data.

//Example
fn1(fn2(fn3(50)));
compose(fn1, fn2, fn3)(50)
pipe(fn3, fn2, fn1)(50)
// These two functions are going to have the exact same output because order is actually the same.

//Composing and pipe data means, that you use the same data, do some modifications and return the transformed data at the end.
// The ORDER MATTERS!