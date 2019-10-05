//function scope

if (0 > 1) {
    var name = 'ipek';
}
name; // ipek

// We are able to reach out name variable because variable is functionally scoped.


//block scope
// Most other languages use block scope

// Anytime I see curly brackets, I am going to create a new environment.

//How can we do block scoping?   ==>  let   &  const keywords


if (1 > 0) {
    let name = 'ipek';
}
name;

// We can only access the name variable inside a block scope.

function count() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('count', i)
}
count()
//counts 1 2 3 4 count 5


function count() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('count', i)
}
count()
//  ReferenceError: i is not defined