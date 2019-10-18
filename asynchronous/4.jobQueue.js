// Callback Queue - Task Queue
setTimeout(() => { console.log('1', 'will be third') }, 0)
setTimeout(() => { console.log('2', 'will be fourth') }, 10)
// Job Queue -- Microtask Queue
Promise.resolve('3 will be second').then((data) => console.log('2', data))

console.log('3', 'will be first')



// Promises are new to JS. Instead of using callbacks, we have naive way to handle asynchronous code with using 'promises'. It is not part of WEB API. 

// Job Queue -- Microtask Queue
// Similar to callback queue, just a little smaller but HIGHER PRIORITY than callback queue.
// Event Loop is going to check the JOB QUEUE FIRST and make sure there is nothing in that  queue before it starts to look CALLBACK QUEUE!!!