// Immutability
// Not changing the data, not changing the state.
// In functional programming, the idea is immutability that is not changing state but instead making copies of the state and returning a new state every time.

const obj = { name: 'Andrew' }
function clone(obj) {
    return { ...obj }   //this is pure
}
//obj.name = 'Nancy'  // This is mutating the state, mutating data in the program in functional programming.

// * Immutability is important in FP. We can change things inside of our function but we don't want to affect the outside world in our programs.

//Ideally, if we want to change the name, we would create a function:

function updateName(obj) {
    const obj2 = clone(obj);
    obj2.name = 'Nina'
    return obj2;
}
//instead of doing: obj.name = 'Nancy'

// maintain immutability of not changing the state
const updatedObj = updateName(obj)
console.log(obj, updatedObj)

//Creating a new function to update the name does not look memory efficient.
// Structural Sharing: Instead of storing the entire copy, underneath the hood what happen is that only the CHANGES that were made to state will be copied. But the things that don't change in memory are actually still there.

// * spread operator which will create a shallow copy (only one level deep)