//IDEMPOTENT
// Idempotence: Calling the function no matter how many times, returns the same thing. Even if it is not pure functions.

function notGood(num) {
    return Math.random(num)
}

notGood(5)
// The idea of impotence is a function that always returns what we expected to do. Sounds like PURE FUNCTIONS 
// but

function good(num) {
    console.log(num)
}
good(5)
// This function console.logs 5 to the outside of world but it is idempotent. Because multiple calls is still going to display SAME OUTPUT.

// Another thing can be idempotent is deleting a user from a database. When we delete a user from a database, deleting that person can only happens once. API call, HTTP requests.


// Another interesting feature of idempotents is the idea of being able to call yourself over and over, and still get the same result.
Math.abs(-50). //50
    Math.abs(Math.abs(-50))  //50