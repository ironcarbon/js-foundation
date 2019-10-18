
//PROMISE
// A promise is an OBJECT that may produce a single value some time in the feature. Either a RESOLVED value, or a reason that it's not resolved.(REJECTED)

//Promise maybe in one of three possible states fulfilled,rejected or pending.

// Callbacks; when something is done, execute the piece of code.
// In callbacks, we get nexted nested functions.

//Promises serves same purpose with callbacks. It comes with ES6 and more powerful.

const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff worked')
    } else {
        reject('Error, it is broke')
    }
})

promise.then(result => console.log(result));  //stuff worked

//Chaining Promises
promise
    .then(result => result + '!')
    .then(result2 => console.log(result2))

//With promises,we can use .catch()

promise
    .then(result => result + '!')
    .then(result2 => {
        throw Error
        console.log(result2)
    })
    .catch(() => console.log('errorrr!'))

//the statements after 'throw' won't be executed

//.catch() catches any errors that may happen between the chains .then

promise
    .then(result => {
        throw Error
        return result + '!!'
    })
    .then(result2 => console.log(result2))
    .catch(() => console.log('errrrror!!!'))

//The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur.

// 'catch' only runs if something fails in before the statement!!

promise
    .then(result => {
        return result + '!!'
    })
    .then(result2 => console.log(result2 + '?'))
    .catch(() => console.log('errrrror!!!'))
    .then(result3 => {
        throw Error;
        console.log(result3 + '*')
    })
// In this example, catch does not catch the error because it happened after catch statement.

// Promises are great for asynchronous programming. When you don't want to js to block the execution of your code like making API calls, grabbing data from a database or optimizing the image.

const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff worked')
    } else {
        reject('Error, it is broke')
    }
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HII')
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'POOKIE')
})
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'Is it me you are looking for?')
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    })

//It took 5 seconds because we promised all. Even though some of them last less, they all come after 5 seconds.

//Promise.all()   => takes an array of promises.

// If we assign the variables first(promise,promise1..) and then do Promise.all(), the result will be INSTANT. Because we already run these promises.


//Example
const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/photos'
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'))
//Or .catch('oops)

  //fetch returns a promise! Adding '.then'  answers the whatever promise returns whether is result or rejects, we get to manipulate the data.

  //Promise succeed or fails once.