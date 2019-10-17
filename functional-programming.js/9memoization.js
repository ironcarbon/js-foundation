// Memoization
// In order to understand how dynamic programming works, we need to understand what caching means. 
// Caching is a way to store values so we can use them later on. Simply, it is just a way to speed up programs.
//Memoization is a specific form of caching. It is used a lot in dynamic programming.

function addTo500(n) {
    console.log('takes time!')
    return n + 500
}
addTo500(50)

// Let's cache it

let cache = {};
function memoizedAddTo500(n) {
    if (n in cache) {
        return cache[n];
    } else {
        console.log('takes time!');
        cache[n] = n + 500;
        return cache[n];
    }
}

console.log('1', memoizedAddTo500(50));
console.log('2', memoizedAddTo500(50));

  // Memoization is a specific form of caching that involves caching return value of a function.

  // Memoziation is simply a way to remember a solution to solve the proble