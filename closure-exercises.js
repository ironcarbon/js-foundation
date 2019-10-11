// First Exercise

let view;
function initialize() {
    view = 'ocean';
    console.log('view has been set!')
}

initialize();
initialize();
initialize();
console.log(view);

// Use closure and don't initialize view everytime I call.

//Solution 1
let view;
let initialize = () => {
    view = 'ocean';
    console.log('has been set');
    return initialize = () => {
        console.log('has already been set')
    }
}


initalize()
initalize()

// Solution 2

let view;
function initalize3() {
    let called = 0;
    return function () {
        if (called === 0) {
            view = 'ocean';
            console.log('has been set')
            called++;
            return view;
        } else {
            console.log('has already been set!!')
        }
    }
}

//exercise 2
const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
    setTimeout(function () {
        console.log('I am at index' + i)
    }, 3000)
}

// solution 1
const array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
    setTimeout(function () {
        console.log('I am at index' + array[i])
    }, 3000)
}
//let allow us to use block scoping

//solution 2
